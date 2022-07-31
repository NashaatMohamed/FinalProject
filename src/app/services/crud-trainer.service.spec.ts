import { TestBed } from '@angular/core/testing';

import { CrudTrainerService } from './crud-trainer.service';

describe('CrudTrainerService', () => {
  let service: CrudTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
