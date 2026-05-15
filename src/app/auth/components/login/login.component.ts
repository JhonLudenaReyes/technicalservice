import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserAuth } from '../../interfaces/userAuth.interface';
import { UserLogin } from '../../interfaces/userLogin.interface';
import { switchMap } from 'rxjs';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //Creación de la propiedad para el formulario reactivo
  loginForm!: FormGroup;
  userData!: UserLogin;
  userAuth!: UserAuth;

  errorServer = {
    error: false,
    detail: 'Su usuario y/o contraseña son incorrectos',
  };

  // Mensajes de error consolidados
  errorMessages: { [key: string]: { [key: string]: string } } = {
    user: {
      required: 'Debe ingresar nombre de usuario',
      minlength: 'El usuario debe tener al menos 5 caracteres',
      maxlength: 'El usuario debe tener un máximo de 10 caracteres',
    },
    password: {
      required: 'Debe ingresar una contraseña',
      minlength: 'El usuario debe tener al menos 8 caracteres',
      maxlength: 'El usuario debe tener un máximo de 10 caracteres',
    }
  };

  get user() {
    return this.loginForm.get('user') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.initLoginForm();
  }

  initLoginForm(): FormGroup {
    return this.fb.group({
      user: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  // Método genérico para obtener mensajes de error
  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    if (!control || !control.errors || !control.touched) return '';

    const firstErrorKey = Object.keys(control.errors)[0];
    return this.errorMessages[controlName]?.[firstErrorKey] || '';
  }

  onLogIn() {
    this.userData = {
      usuario: this.loginForm.get('user')?.value,
      contrasenia: this.loginForm.get('password')?.value,
    };

    // Primero autenticamos para obtener el JWT y luego obtenemos los datos del usuario
    this.authService.authenticate(this.userData).pipe(
      switchMap(() => this.authService.getUserLogIn(this.userData))
    ).subscribe({
      next: (userLogIn) => {
        this.userAuth = userLogIn;
        this.router.navigate(['/dashboard/admin']);
      },
      error: (response) => {
        this.errorServer.error = true;
      },
    });
  }

  onErrorClear() {
    this.errorServer.error = false;
  }
}
