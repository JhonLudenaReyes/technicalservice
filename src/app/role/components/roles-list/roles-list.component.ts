import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';

import { Role } from '../../interfaces/role.interface';
import { NotificationService } from 'src/app/auth/services/notification.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css'],
})
export class RolesListComponent implements OnInit {
  roles!: Role[];

  //PARAM PAGINATION
  page: number = 1;

  //PARAM FILTER
  roleFilter: any = { rol: '' };

  notification$ = this.notificationService.notification$;

  ngOnInit(): void {
    this.getRolesList();
  }

  constructor(
    private roleService: RoleService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  getRolesList() {
    this.roleService
      .getRolesActive()
      .subscribe((response) => (this.roles = response));
  }

  deleteRole(role: Role) {
    let result = confirm(
      `Está seguro que desea eliminar ${role.rol} de la lista de roles`,
    );
    if (result) {
      this.roleService.deleteRole(role.idRol || 0).subscribe({
        next: (role) => {
          this.getRolesList();
          this.notificationService.showSuccess(`¡El rol de ${role.rol} ha sido actualizado satisfactoriamente!`);
        },
        error: () => {
          this.notificationService.showError(`Error al intentar eliminar el rol.`);
        }
      });
    } else {
      this.notificationService.showError(`¡La eliminación del rol de ${role.rol} ha sido cancelado!`);
    }
  }

  onClearNotification() {
    this.notificationService.clear();
  }
}

