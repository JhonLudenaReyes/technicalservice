import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  idRole: number = 0;
  enable: boolean = true;
  private authSub!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSub = this.authService.idRole$.subscribe((idRole) => {
      this.idRole = idRole;
      this.enable = idRole === 0;
    });
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  title = 'technicalservice';
}
