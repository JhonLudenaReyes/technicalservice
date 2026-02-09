import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';

import { Role } from '../../interfaces/role.interface';
import { Notificat } from 'src/app/auth/interfaces/notificat.interface';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css'],
})
export class RolesListComponent implements OnInit {
  roles!: Role[];

  //SUCCESS NOTIFICATION
  addSuccess: Notificat = {
    enable: false,
    server: '',
    detail: '',
  };

  //NOTIFICACIÓN ERROR
  errorServer: Notificat = {
    enable: false,
    server: '',
    detail: '',
  };

  ngOnInit(): void {
    this.getRolesList();
  }

  constructor(
    private roleService: RoleService,
    private router: Router,
  ) {}

  getRolesList() {
    this.roleService
      .getRolesActive()
      .subscribe((response) => (this.roles = response));
  }

  onSuccess(role: Role) {
    this.addSuccess.enable = true;
    this.addSuccess.detail = `¡El rol de ${role.rol} ha sido actualizado satisfactoriamente!`;
  }

  onInvalid(role: Role) {
    this.errorServer.enable = true;
    this.errorServer.detail = `¡La eliminación del rol de ${role.rol} ha sido cancelado!`;
  }

  deleteRole(role: Role) {
    let result = confirm(
      `Está seguro que desea eliminar ${role.rol} de la lista de roles`,
    );
    if (result) {
      this.roleService.deleteRole(role.idRol || 0).subscribe({
        next: (role) => {
          this.getRolesList();
          this.onSuccess(role);
        },
      });
    } else {
      this.onInvalid(role);
    }
  }

  //CLEAR SUCCESS NOTIFICATION
  onSuccessClear() {
    this.addSuccess.enable = false;
  }

  //NOTIFICACIÓN
  onErrorClear() {
    this.errorServer.enable = false;
  }
}
