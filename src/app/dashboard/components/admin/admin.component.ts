import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, UserAuth } from 'src/app/auth/interfaces/userAuth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  userAuth!: UserAuth | null;
  roles!: Role[] | null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    //Extraer del AuthService los datos del Usuario Logeado
    this.userAuth = this.authService.currentUserValue;

    //Extraer todos los roles de ese usuario
    this.roles = this.userAuth?.roles || null;
  }

  onMain(idRole: number) {
    this.authService.setRole(idRole);
    this.router.navigate([`dashboard/main`]);
  }
}
