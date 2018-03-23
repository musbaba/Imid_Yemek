import { TestBed, inject } from '@angular/core/testing';

import { UsermealticketService } from './usermealticket.service';

describe('UsermealticketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermealticketService]
    });
  });

  it('should be created', inject([UsermealticketService], (service: UsermealticketService) => {
    expect(service).toBeTruthy();
  }));
});
