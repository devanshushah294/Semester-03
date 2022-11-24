import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiStudentService {
  constructor(private __http: HttpClient) {}
  getAllStudents() {
    return this.__http.get(
      'https://630c662f53a833c53429c1c8.mockapi.io/students'
    );
  }
  getByIdStudent(i: any) {
    return this.__http.get(
      'https://630c662f53a833c53429c1c8.mockapi.io/students/' + i
    );
  }
}
