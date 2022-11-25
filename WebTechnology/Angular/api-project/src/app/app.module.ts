import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './header/header.component';
import { StudentByIdComponent } from './student-by-id/student-by-id.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    HeaderComponent,
    StudentByIdComponent,
    EmployeesComponent,
    EmployeeByIdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
