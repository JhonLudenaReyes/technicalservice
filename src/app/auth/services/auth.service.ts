import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAuth } from '../interfaces/userAuth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuth!: UserAuth;

  private apiUrl = `http://localhost:8081/servicio-tecnico/web-service/api`;

  constructor(private http: HttpClient) {}

  getUserLogIn(user: UserAuth): Observable<UserAuth> {
    return this.http.post<UserAuth>(`${this.apiUrl}/usuarios/login`, user);
  }
}
