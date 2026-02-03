import { Component } from '@angular/core';
import { UserAuth } from 'src/app/auth/interfaces/userAuth.interface';
import { Permit } from 'src/app/permit/interfaces/Permit.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  userAuth!: UserAuth;
  idRole!: number;
  permits!: Permit[];

  //Variables del menu
  user: boolean = true;
  person: boolean = true;
  client: boolean = true;
  gender: boolean = true;
  role: boolean = true;
  profile: boolean = true;

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.userAuth = JSON.parse(localStorage.getItem('userAuth') || 'null');
    this.idRole = JSON.parse(localStorage.getItem('idRole') || '0');
    if (this.userAuth != null && this.idRole > 0) {
      //console.log('Ahora puedes mostrar los permisos');
      //console.log(`Test Panel idRole: ${this.idRole}`);
      //console.log(this.userAuth.roles[this.idRole - 1]);
      this.permits = this.userAuth.roles[this.idRole - 1].permisos;
      //console.log(this.permits);
      this.addMenu(this.permits);
    }
  }

  addMenu(permissions: Permit[]) {
    if (
      permissions.find(
        (permision) =>
          permision.idPermiso === 1 ||
          permision.idPermiso === 2 ||
          permision.idPermiso === 3 ||
          permision.idPermiso === 4,
      )
    ) {
      this.role = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.idPermiso === 5 ||
          permision.idPermiso === 6 ||
          permision.idPermiso === 7 ||
          permision.idPermiso === 8,
      )
    ) {
      this.person = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.idPermiso === 9 ||
          permision.idPermiso === 10 ||
          permision.idPermiso === 11 ||
          permision.idPermiso === 12,
      )
    ) {
      this.client = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.idPermiso === 13 ||
          permision.idPermiso === 14 ||
          permision.idPermiso === 15 ||
          permision.idPermiso === 16,
      )
    ) {
      this.gender = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.idPermiso === 17 ||
          permision.idPermiso === 18 ||
          permision.idPermiso === 19 ||
          permision.idPermiso === 20,
      )
    ) {
      this.user = false;
    }

    if (
      permissions.find(
        (permision) =>
          permision.idPermiso === 21 ||
          permision.idPermiso === 22 ||
          permision.idPermiso === 23 ||
          permision.idPermiso === 24,
      )
    ) {
      this.profile = false;
    }
  }

  onHumburger() {
    document.querySelector('#sidebar')?.classList.toggle('expand');
  }
}
