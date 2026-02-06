import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/Role.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role!: Role;

  private serverURL = `http://localhost:8081`;

  private apiUrl = `servicio-tecnico/web-service/api`;

  constructor(private http: HttpClient) {}

  getRolesActive(): Observable<Role[]> {
    return this.http.get<Role[]>(
      `${this.serverURL}/${this.apiUrl}/roles/roles-select`,
    );
  }

  saveRole(role: Role): Observable<Role> {
    return this.http.post<Role>(
      `${this.serverURL}/${this.apiUrl}/roles/save`,
      role,
    );
  }
}
