import { TestBed, inject } from '@angular/core/testing';

import { TanimlarService } from './tanimlar.service';

describe('TanimlarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TanimlarService]
    });
  });

  it('should be created', inject([TanimlarService], (service: TanimlarService) => {
    expect(service).toBeTruthy();
  }));
});
