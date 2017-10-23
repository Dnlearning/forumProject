import { TestBed, inject } from '@angular/core/testing';

import { CheckOutPaypalService } from './check-out-paypal.service';

describe('CheckOutPaypalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckOutPaypalService]
    });
  });

  it('should be created', inject([CheckOutPaypalService], (service: CheckOutPaypalService) => {
    expect(service).toBeTruthy();
  }));
});
