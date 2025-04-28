import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  habilitar: boolean = false;

  onHumburger() {
    document.querySelector('#sidebar')?.classList.toggle('expand');
  }
}
