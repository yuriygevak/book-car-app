import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { BookingDetailsStorageService } from '../services';

@Injectable()
export class PaymentGuard implements CanLoad {

  constructor(private bookingDetailsStorageService: BookingDetailsStorageService,
              private router: Router) {}

  canLoad(): Promise<boolean> {
    return this.bookingDetailsStorageService.getStoredBookingDetails().then(bookingDetails => {
      if (!bookingDetails) {
        this.router.navigate(['/']);
      }
      return true;
    });
  }

}
