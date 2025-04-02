import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  idRole!: number;

  ngOnInit(): void {
    //Formas de convertir de string a number
    //this.idRole = Number(localStorage.getItem('idRole') || '');
    //this.idRole = parseInt(localStorage.getItem('idRole') || '', 10);

    this.idRole = +(localStorage.getItem('idRole') || '');

    console.log(this.idRole);
  }
}
