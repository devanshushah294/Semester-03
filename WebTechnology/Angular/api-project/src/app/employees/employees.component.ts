import { Component } from '@angular/core';
import { ApiEmployeesService } from '../api-employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  employees: Employee[] = [];
  constructor(private __api: ApiEmployeesService) {}
  ngOnInit() {
    this.__api.getAllEmployees().subscribe((res: any) => {
      this.employees = res;
    });
  }
}
