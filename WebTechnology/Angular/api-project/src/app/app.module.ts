import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './header/header.component';
import { FacultyByIdComponent } from './faculty-by-id/faculty-by-id.component';
import { StundentByIdComponent } from './stundent-by-id/stundent-by-id.component';
import { StudentByIdComponent } from './student-by-id/student-by-id.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, StudentsComponent, HeaderComponent, FacultyByIdComponent, StundentByIdComponent, StudentByIdComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
