import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./person/person.module').then((m) => m.PersonModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
