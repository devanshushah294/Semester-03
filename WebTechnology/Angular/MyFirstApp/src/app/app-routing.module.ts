import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperiencedFacultiesComponent } from './experienced-faculties/experienced-faculties.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ResultComponent } from './result/result.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'result', component: ResultComponent },
  { path: 'faculties', component: FacultiesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'faculties/experienced', component: ExperiencedFacultiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
