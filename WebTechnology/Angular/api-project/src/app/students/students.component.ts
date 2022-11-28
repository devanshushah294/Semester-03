import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: Student[] = [];
  constructor(
    private __api: ApiStudentService,
    private router: Router,
    private __actRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.__api.getAllStudents().subscribe((res: any) => {
      this.students = res;
    });
  }
  delete(i: any) {
    this.__api.deleteById(i).subscribe((res: any) => {
      this.ngOnInit();
    });
  }
  idToEdit = -1;
  insert() {
    console.log(this.__actRoute.snapshot.params['id']);
  }
}
