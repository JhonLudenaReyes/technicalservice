import { Component, OnInit } from '@angular/core';
import { Role } from '../../interfaces/Role.interface';

import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css'],
})
export class RolesListComponent implements OnInit {
  roles!: Role[];

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
}
