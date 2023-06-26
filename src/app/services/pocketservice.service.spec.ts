import { TestBed } from '@angular/core/testing';

import { PocketserviceService } from './pocketservice.service';

describe('PocketserviceService', () => {
  let service: PocketserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocketserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
