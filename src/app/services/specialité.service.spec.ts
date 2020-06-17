import { TestBed } from '@angular/core/testing';

import { SpecialitéService } from './specialité.service';

describe('SpecialitéService', () => {
  let service: SpecialitéService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialitéService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
