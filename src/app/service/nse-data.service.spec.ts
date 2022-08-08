import { TestBed } from '@angular/core/testing';

import { NseDataService } from './nse-data.service';

describe('NseDataService', () => {
  let service: NseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
