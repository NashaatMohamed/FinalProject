import { TestBed } from '@angular/core/testing';

import { SingleworkoutService } from './singleworkout.service';

describe('SingleworkoutService', () => {
  let service: SingleworkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleworkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
