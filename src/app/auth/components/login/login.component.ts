import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuth } from '../../interfaces/userAuth.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../interfaces/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Creación de la propiedad para el formulario reactivo
  loginForm!: FormGroup;
  userData!: UserLogin;
  userAuth!: UserAuth;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      user: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(8)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
    });
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
    });
  }
}
