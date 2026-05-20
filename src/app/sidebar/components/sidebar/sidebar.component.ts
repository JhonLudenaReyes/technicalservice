import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAuth } from 'src/app/auth/interfaces/userAuth.interface';
import { Permission } from 'src/app/role/interfaces/permission.interface';
import { RoleService } from 'src/app/role/services/role.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  userAuth!: UserAuth | null;
  idRole!: number;
  permissions!: Permission[];
  private roleSubscription!: Subscription;

  // Variables del menu (true = oculto, false = visible)
  user: boolean = true;
  person: boolean = true;
  client: boolean = true;
  gender: boolean = true;
  role: boolean = true;
  profile: boolean = true;

  constructor(
    private roleService: RoleService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Nos suscribimos a los cambios de rol de forma reactiva
    this.roleSubscription = this.authService.idRole$.subscribe((idRole) => {
      this.idRole = idRole;
      this.userAuth = this.authService.currentUserValue;

      if (this.userAuth != null && this.idRole > 0) {
        this.roleService.getPermissions(this.idRole).subscribe({
          next: (permissions) => {
            this.permissions = permissions;
            this.resetMenu();
            this.addMenu(this.permissions);
          },
          error: (err) => console.error('Error al cargar permisos:', err),
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Limpiamos la suscripción para evitar memory leaks
    if (this.roleSubscription) {
      this.roleSubscription.unsubscribe();
    }
  }

  resetMenu(): void {
    this.user = true;
    this.person = true;
    this.client = true;
    this.gender = true;
    this.role = true;
    this.profile = true;
  }

  addMenu(permissions: Permission[]) {
    // Optimizamos usando .some() para verificar rangos de IDs de permisos
    if (permissions.some(p => p.permissionId >= 1 && p.permissionId <= 5)) {
      this.role = false;
    }

    if (permissions.some(p => p.permissionId >= 6 && p.permissionId <= 10)) {
      this.person = false;
    }

    if (permissions.some(p => p.permissionId >= 11 && p.permissionId <= 15)) {
      this.client = false;
    }

    if (permissions.some(p => p.permissionId >= 16 && p.permissionId <= 20)) {
      this.gender = false;
    }

    if (permissions.some(p => p.permissionId >= 21 && p.permissionId <= 25)) {
      this.user = false;
    }

    if (permissions.some(p => p.permissionId >= 26 && p.permissionId <= 30)) {
      this.profile = false;
    }
  }

  onHumburger() {
    document.querySelector('#sidebar')?.classList.toggle('expand');
  }
}
