import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RoleRegisterComponent } from './components/role-register/role-register.component';

import { RoleRoutingModule } from './role-routing.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

//Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module pagination

@NgModule({
  declarations: [RolesListComponent, RoleRegisterComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule, // <-- include it in your app module
  ],
})
export class RoleModule {}
