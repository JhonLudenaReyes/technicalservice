import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { UserAuth } from '../interfaces/userAuth.interface';
import { UserLogin } from '../interfaces/userLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userAuthSubject = new BehaviorSubject<UserAuth | null>(
    JSON.parse(localStorage.getItem('userAuth') || 'null')
  );
  public userAuth$ = this.userAuthSubject.asObservable();

  private idRoleSubject = new BehaviorSubject<number>(
    Number(localStorage.getItem('idRole') || '0')
  );
  public idRole$ = this.idRoleSubject.asObservable();

  private serverURL = `http://localhost:8081`;
  private apiUrl = `servicio-tecnico/web-service/api`;

  constructor(private http: HttpClient) {}

  getUserLogIn(user: UserLogin): Observable<UserAuth> {
    return this.http.post<UserAuth>(
      `${this.serverURL}/${this.apiUrl}/usuarios/login`,
      user,
    ).pipe(
      tap(userAuth => {
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
        this.userAuthSubject.next(userAuth);
      })
    );
  }

  setRole(idRole: number): void {
    localStorage.setItem('idRole', idRole.toString());
    this.idRoleSubject.next(idRole);
  }

  logout(): void {
    localStorage.removeItem('userAuth');
    localStorage.removeItem('idRole');
    this.userAuthSubject.next(null);
    this.idRoleSubject.next(0);
  }

  get currentUserValue(): UserAuth | null {
    return this.userAuthSubject.value;
  }
}
