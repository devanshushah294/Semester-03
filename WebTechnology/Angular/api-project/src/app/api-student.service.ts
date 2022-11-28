import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiStudentService {
  constructor(private __http: HttpClient) {}
  apiUrl: string = 'https://630c662f53a833c53429c1c8.mockapi.io/students';
  getAllStudents() {
    return this.__http.get(this.apiUrl);
  }
  getByIdStudent(i: any) {
    return this.__http.get(this.apiUrl + '/' + i);
  }
  deleteById(i: any) {
    return this.__http.delete(this.apiUrl + '/' + i);
  }
  insertNewStudent() {}
  editById() {}
}
