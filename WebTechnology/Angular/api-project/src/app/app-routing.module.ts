import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

import { StudentByIdComponent } from './student-by-id/student-by-id.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'student/:id',
    component: StudentByIdComponent,
  },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/add', component: AddStudentComponent },
  { path: 'employee/edit/:id', component: AddStudentComponent },
  { path: 'employee/:id', component: EmployeeByIdComponent },
  { path: 'vehicles', component: VehiclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
