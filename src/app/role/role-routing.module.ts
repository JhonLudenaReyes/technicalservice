import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RoleRegisterComponent } from './components/role-register/role-register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'roles-list',
        component: RolesListComponent,
      },
      {
        path: 'role-register',
        component: RoleRegisterComponent,
      },
      {
        path: '**',
        redirectTo: 'roles-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RoleRoutingModule {}
