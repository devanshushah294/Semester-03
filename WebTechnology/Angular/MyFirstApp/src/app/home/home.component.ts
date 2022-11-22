import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  welcomeMessage = 'Hello world from First Angular App';
  imageAddress = 'https://www.darshan.ac.in/Content/media/DU_Logo.svg';
  printMessage = '';
  changeHelloMsg() {
    this.welcomeMessage = 'Hello world form Darshan Uni - Rajkot';
  }
}
