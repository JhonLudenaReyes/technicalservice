import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRegisterComponent } from './components/person-register/person-register.component';
import { PersonSearchComponent } from './components/person-search/person-search.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [
    PersonRegisterComponent,
    PersonSearchComponent,
    PeopleListComponent,
  ],
  imports: [CommonModule, PersonRoutingModule],
})
export class PersonModule {}
