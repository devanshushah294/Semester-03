import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  students = [
    {
      name: 'Divyank',
      sem: 4,
      spi: 9.8,
    },
    {
      name: 'Mubin',
      sem: 4,
      spi: 9.8,
    },
  ];
}
