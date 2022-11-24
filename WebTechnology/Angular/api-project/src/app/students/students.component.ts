import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: Student[] = [];
  constructor(private __api: ApiStudentService) {}
  ngOnInit() {
    this.__api.getAllStudents().subscribe((res: any) => {
      this.students = res;
    });
  }
}
