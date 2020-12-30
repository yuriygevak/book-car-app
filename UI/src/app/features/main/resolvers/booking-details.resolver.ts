import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { BookingDetails } from '../models';
import { BookingDetailsStorageService } from '../services';

@Injectable()
export class BookingDetailsResolver implements Resolve<BookingDetails> {

  constructor(private bookingDetailsStorageService: BookingDetailsStorageService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<BookingDetails> {
    return this.bookingDetailsStorageService.getStoredBookingDetails();
  }
}
