import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiEmployeesService } from '../api-employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.css'],
})
export class EmployeeByIdComponent {
  id: any;
  employee = new Employee();
  constructor(
    private __api: ApiEmployeesService,
    private __actRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.__actRoute.snapshot.params['id'];
    this.__api.getEmployeeById(this.id).subscribe((res: any) => {
      this.employee = res;
    });
  }
}
