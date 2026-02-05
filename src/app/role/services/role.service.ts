import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/Role.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role!: Role;

  constructor(private http: HttpClient) {}

  getRolesActive(): Observable<Role[]> {
    return this.http.get<Role[]>(
      `http://localhost:8081/servicio-tecnico/web-service/api/roles/roles-select`,
    );
  }
}
