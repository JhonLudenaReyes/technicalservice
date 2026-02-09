import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Role } from '../../interfaces/role.interface';
import { RoleService } from '../../services/role.service';
import { ErrorResponse } from 'src/app/role/interfaces/errorResponse.interface';
import { Notificat } from 'src/app/auth/interfaces/notificat.interface';

@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.css'],
})
export class RoleRegisterComponent implements OnInit {
  //Creación de la propiedad para el formulario reactivo
  roleForm!: FormGroup;
  roleData!: Role;

  action: string = 'Registro ';

  roleId!: number;

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

  onInvalid(role: Role, errorResponse: ErrorResponse) {
    this.errorServer.enable = true;
    this.errorServer.server = `${errorResponse.error.error}`;
    this.errorServer.detail = `¡El rol de ${role.rol} no ha podido ser guardado correctamente!`;
  }

  onSuccess(role: Role) {
    this.addSuccess.enable = true;
    this.addSuccess.detail = `¡El rol de ${role.rol} ha sido guardado satisfactoriamente!`;
  }

  get role() {
    return this.roleForm.get('role') as FormControl;
  }

  constructor(
    private readonly fb: FormBuilder,
    private roleService: RoleService,
    private router: Router,
    private aRoute: ActivatedRoute,
  ) {
    this.roleForm = this.initRoleForm();
    this.roleId = Number(aRoute.snapshot.paramMap.get('roleId'));
  }

  ngOnInit(): void {
    if (this.roleId != 0) {
      this.action = 'Edición ';
      this.getRoleEdit(this.roleId);
    }
  }

  getRoleEdit(roleId: number) {
    this.roleService.getRoleEdit(roleId).subscribe({
      next: (role) => {
        this.roleForm.setValue({
          role: role.rol,
        });
      },
    });
  }

  initRoleForm(): FormGroup {
    return this.fb.group({
      role: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  onSubmit(): void {
    //Data
    this.roleData = {
      rol: this.roleForm.get('role')?.value,
    };

    if (this.roleId == 0) {
      this.roleService.saveRole(this.roleData).subscribe({
        next: (role: Role) => {
          this.onSuccess(role);
          this.roleForm.reset();
        },
        error: (response: ErrorResponse) => {
          this.onInvalid(this.roleData, response);
        },
      });
    } else {
      this.roleData.idRol = this.roleId;

      this.roleService.saveRole(this.roleData).subscribe({
        next: (role: Role) => {
          this.onSuccess(role);
          this.roleForm.reset();
        },
        error: (response: ErrorResponse) => {
          this.onInvalid(this.roleData, response);
        },
      });
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
