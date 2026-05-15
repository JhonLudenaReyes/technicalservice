import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { Notificat } from 'src/app/auth/interfaces/notificat.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notificat>({
    enable: false,
    server: '',
    detail: ''
  });

  public notification$ = this.notificationSubject.asObservable();

  showSuccess(detail: string) {
    this.notificationSubject.next({
      enable: true,
      server: 'success',
      detail: detail
    });
    this.autoHide();
  }

  showError(detail: string) {
    this.notificationSubject.next({
      enable: true,
      server: 'error',
      detail: detail
    });
  }

  clear() {
    this.notificationSubject.next({
      enable: false,
      server: '',
      detail: ''
    });
  }

  private autoHide() {
    timer(5000).subscribe(() => this.clear());
  }
}
