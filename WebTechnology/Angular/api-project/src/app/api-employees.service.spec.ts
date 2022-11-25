import { TestBed } from '@angular/core/testing';

import { ApiEmployeesService } from './api-employees.service';

describe('ApiEmployeesService', () => {
  let service: ApiEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
