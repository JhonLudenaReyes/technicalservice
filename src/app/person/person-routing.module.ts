import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonRegisterComponent } from './components/person-register/person-register.component';
import { PersonSearchComponent } from './components/person-search/person-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'people-list',
        component: PeopleListComponent,
      },
      {
        path: 'person-register',
        component: PersonRegisterComponent,
      },
      {
        path: 'person-search',
        component: PersonSearchComponent,
      },
      {
        path: '**',
        redirectTo: 'people-list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PersonRoutingModule {}
