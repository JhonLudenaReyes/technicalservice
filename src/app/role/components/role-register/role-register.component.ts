import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Role } from '../../interfaces/Role.interface';
import { RoleService } from '../../services/role.service';
import { ErrorResponse } from 'src/app/role/interfaces/errorResponse.interface';

@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.css'],
})
export class RoleRegisterComponent {
  //Creación de la propiedad para el formulario reactivo
  roleForm!: FormGroup;
  roleData!: Role;

  //SUCCESS NOTIFICATION
  addSuccess = {
    enable: false,
    detail: '',
  };

  //NOTIFICACIÓN ERROR
  errorServer = {
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
  ) {
    this.roleForm = this.initRoleForm();
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
    this.roleData = {
      rol: this.roleForm.get('role')?.value,
    };

    this.roleService.saveRole(this.roleData).subscribe({
      next: (role: Role) => {
        console.log('entro a success');
        //alert(`Datos guardados`);
        this.onSuccess(role);
        this.roleForm.reset();
      },
      error: (response: ErrorResponse) => {
        //alert(`SUs datos no se han guardados`);
        console.log('entro a invalid');
        this.onInvalid(this.roleData, response);
      },
    });
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
