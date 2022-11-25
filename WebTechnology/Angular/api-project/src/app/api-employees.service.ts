import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiEmployeesService {
  constructor(private __http: HttpClient) {}
  getAllEmployees() {
    return this.__http.get(
      'https://630c662f53a833c53429c1c8.mockapi.io/Employee'
    );
  }
  getEmployeeById(i: any) {
    return this.__http.get(
      'https://630c662f53a833c53429c1c8.mockapi.io/Employee/' + i
    );
  }
}
