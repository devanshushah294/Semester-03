import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentByIdComponent } from './student-by-id/student-by-id.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';

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
  { path: 'employee/:id', component: EmployeeByIdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
