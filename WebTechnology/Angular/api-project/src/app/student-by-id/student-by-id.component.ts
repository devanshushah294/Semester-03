import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-by-id',
  templateUrl: './student-by-id.component.html',
  styleUrls: ['./student-by-id.component.css'],
})
export class StudentByIdComponent {
  id = 0;
  data: Student = new Student();
  constructor(
    private __actRoute: ActivatedRoute,
    private __api: ApiStudentService
  ) {}
  ngOnInit() {
    this.id = this.__actRoute.snapshot.params['id'];
    this.__api.getByIdStudent(this.id).subscribe((res: any) => {
      this.data = res;
    });
  }
}
