import { TestBed } from '@angular/core/testing';

import { ExerciesService } from './exercies.service';

describe('ExerciesService', () => {
  let service: ExerciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
