import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserAuth } from '../../interfaces/userAuth.interface';
import { UserLogin } from '../../interfaces/userLogin.interface';

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

  // Definir mensajes de error para usuario
  errorMessagesUser = {
    required: 'Debe ingresar nombre de usuario',
    minlength: 'El usuario debe tener al menos 5 caracteres',
    maxlength: 'El usuario debe tener un máximo de 10 caracteres',
  };

  // Definir mensajes de error para contraseña
  errorMessagesPassword = {
    required: 'Debe ingresar una contraseña',
    minlength: 'El usuario debe tener al menos 8 caracteres',
    maxlength: 'El usuario debe tener un máximo de 10 caracteres',
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

  // Método para obtener mensajes de error
  getErrorMessageUser(controlName: string) {
    const control = this.loginForm.get(controlName);
    if (control == null) {
      return;
    }
    for (const error in control.errors) {
      if (control.errors.hasOwnProperty(error) && control.touched) {
        switch (error) {
          case 'required':
            return this.errorMessagesUser.required;
          case 'minlength':
            return this.errorMessagesUser.minlength;
          case 'maxlength':
            return this.errorMessagesUser.maxlength;
          default:
            return;
        }
      }
    }
    return '';
  }

  // Método para obtener mensajes de error
  getErrorMessagePassword(controlName: string) {
    const control = this.loginForm.get(controlName);
    if (control == null) {
      return;
    }
    for (const error in control.errors) {
      if (control.errors.hasOwnProperty(error) && control.touched) {
        switch (error) {
          case 'required':
            return this.errorMessagesPassword.required;
          case 'minlength':
            return this.errorMessagesPassword.minlength;
          case 'maxlength':
            return this.errorMessagesPassword.maxlength;
          default:
            return;
        }
      }
    }
    return '';
  }

  onLogIn() {
    this.userData = {
      usuario: this.loginForm.get('user')?.value,
      contrasenia: this.loginForm.get('password')?.value,
    };

    this.authService.getUserLogIn(this.userData).subscribe({
      next: (userLogIn) => {
        this.userAuth = userLogIn;

        localStorage.setItem('userAuth', JSON.stringify(this.userAuth));

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
