import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../interfaces/role.interface';
import { RolePermits } from '../interfaces/rolePermits.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role!: Role;

  private apiUrl = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient) {}

  //Busca un rol por el ID
  getRoleEdit(roleId: number): Observable<Role> {
    return this.http.get<Role>(
      `${this.apiUrl}/role-select/${roleId}`,
    );
  }

  //Busca un rol con sus respectivos permisos por el ID
  getRolePertmits(roleId: number): Observable<RolePermits> {
    return this.http.get<RolePermits>(
      `${this.apiUrl}/role-permits/${roleId}`,
    );
  }

  getRolesActive(): Observable<Role[]> {
    return this.http.get<Role[]>(
      `${this.apiUrl}/roles-select`,
    );
  }

  saveRole(role: Role): Observable<Role> {
    return this.http.post<Role>(
      `${this.apiUrl}/save`,
      role,
    );
  }

  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>(
      `${this.apiUrl}/update-role`,
      role,
    );
  }

  deleteRole(roleId: number): Observable<Role> {
    return this.http.put<Role>(
      `${this.apiUrl}/delete-role/${roleId}`,
      roleId,
    );
  }
}
