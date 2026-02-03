import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RoleRegisterComponent } from './components/role-register/role-register.component';

import { RoleRoutingModule } from './role-routing.module';

@NgModule({
  declarations: [RolesListComponent, RoleRegisterComponent],
  imports: [CommonModule, RoleRoutingModule],
})
export class RoleModule {}
