import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: '**',
        redirectTo: 'main',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
