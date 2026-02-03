import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/auth/interfaces/userAuth.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements DoCheck {
  habilitar: boolean = false;
  userAuth!: UserAuth;

  constructor(private router: Router) {}

  ngDoCheck(): void {
    this.userAuth = JSON.parse(localStorage.getItem('userAuth') || 'null');

    if (this.userAuth != null) {
      this.habilitar = true;
    }
  }

  landingMain() {
    this.router.navigate(['landing']);
  }

  iniciarSesion() {
    this.router.navigate(['auth/login']);
  }

  cerrarSesion() {
    localStorage.removeItem('userAuth');
    localStorage.removeItem('idRole');
    this.habilitar = false;

    //localStorage.removeItem(`permissionsLogin`);

    this.router.navigate(['auth/login']);
  }
}
