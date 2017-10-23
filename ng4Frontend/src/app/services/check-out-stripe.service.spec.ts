import { TestBed, inject } from '@angular/core/testing';

import { CheckOutStripeService } from './check-out-stripe.service';

describe('CheckOutStripeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckOutStripeService]
    });
  });

  it('should be created', inject([CheckOutStripeService], (service: CheckOutStripeService) => {
    expect(service).toBeTruthy();
  }));
});
