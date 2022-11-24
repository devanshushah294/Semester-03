import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultiesComponent } from './faculties/faculties.component';
import { ResultComponent } from './result/result.component';
import { StudentsComponent } from './students/students.component';
import { ProductsComponent } from './products/products.component';
import { ExperiencedFacultiesComponent } from './experienced-faculties/experienced-faculties.component';
import { EmployeeComponent } from './employee/employee.component';
import { WorkerComponent } from './worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FacultiesComponent,
    ResultComponent,
    StudentsComponent,
    ProductsComponent,
    ExperiencedFacultiesComponent,
    EmployeeComponent,
    WorkerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
