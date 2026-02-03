import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, UserAuth } from 'src/app/auth/interfaces/userAuth.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  userAuth!: UserAuth;
  roles!: Role[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Extraer del LocalStorage los datos completos del Usuario Logeado
    this.userAuth = JSON.parse(localStorage.getItem('userAuth') || 'null');

    //Extraer todos los roles de ese usuario
    this.roles = this.userAuth.roles || null;
  }

  onMain(idRole: number) {
    localStorage.setItem('idRole', idRole.toString());
    this.router.navigate([`dashboard/main`]);
  }
}
