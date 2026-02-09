import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role.interface';
import { RolePermits } from '../interfaces/rolePermits.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role!: Role;

  private serverURL = `http://localhost:8081`;

  private apiUrl = `servicio-tecnico/web-service/api`;

  constructor(private http: HttpClient) {}

  //Busca un rol por el ID
  getRoleEdit(roleId: number): Observable<Role> {
    return this.http.get<Role>(
      `${this.serverURL}/${this.apiUrl}/roles/role-select/${roleId}`,
    );
  }

  //Busca un rol con sus respectivos permisos por el ID
  getRolePertmits(roleId: number): Observable<RolePermits> {
    return this.http.get<RolePermits>(
      `${this.serverURL}/${this.apiUrl}/roles/role-permits/${roleId}`,
    );
  }

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

  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>(
      `${this.serverURL}/${this.apiUrl}/roles/update-role`,
      role,
    );
  }

  deleteRole(roleId: number): Observable<Role> {
    return this.http.put<Role>(
      `${this.serverURL}/${this.apiUrl}/roles/delete-role/${roleId}`,
      roleId,
    );
  }
}
