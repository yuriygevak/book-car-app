import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { BookingDetails } from '../models';

@Injectable()
export class BookingDetailsStorageService {

  constructor(private storage: Storage) {}

  async getStoredBookingDetails(): Promise<BookingDetails> {
    return await this.storage.get('bookingDetails');
  }

  async setStoredBookingDetails(bookingDetails: BookingDetails) {
    await this.storage.set('bookingDetails', bookingDetails);
  }

}
