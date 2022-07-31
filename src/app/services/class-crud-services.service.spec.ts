import { TestBed } from '@angular/core/testing';

import { ClassCrudServicesService } from './class-crud-services.service';

describe('ClassCrudServicesService', () => {
  let service: ClassCrudServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassCrudServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
