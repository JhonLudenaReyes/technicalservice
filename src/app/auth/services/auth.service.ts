import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAuth } from '../interfaces/userAuth.interface';
import { UserLogin } from '../interfaces/userLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuth!: UserAuth;
  user!: UserLogin;

  private serverURL = `http://localhost:8081`;

  private apiUrl = `servicio-tecnico/web-service/api`;

  constructor(private http: HttpClient) {}

  getUserLogIn(user: UserLogin): Observable<UserAuth> {
    return this.http.post<UserAuth>(
      `${this.serverURL}/${this.apiUrl}/usuarios/login`,
      user,
    );
  }
}
