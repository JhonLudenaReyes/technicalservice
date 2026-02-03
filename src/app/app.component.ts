import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  idRole!: number;
  enable: boolean = true;

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.idRole = JSON.parse(localStorage.getItem('idRole') || '0');
    //console.log(`Test Panel idRole: ${this.idRole}`);
    if (this.idRole > 0) {
      this.enable = false;
    }
  }
  title = 'technicalservice';
}
