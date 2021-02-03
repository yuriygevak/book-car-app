import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BookingDetails } from '../../models';
import { ApiService, BookingDetailsStorageService } from '../../services';
import { paymentMethods } from './constants';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPage implements OnInit {
  bookingDetails: BookingDetails = new BookingDetails();
  paymentMethods = paymentMethods;
  objectKeys = Object.keys;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private bookingDetailsStorageService: BookingDetailsStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.bookingDetails = data.bookingDetails;
      });
  }

  choosePayMethod(): void {
    // todo: just skip payment and save booking details and go to congratulations page
    this.apiService.saveBooking(this.bookingDetails).subscribe(resp => {
      this.bookingDetailsStorageService.setStoredBookingDetails(null);
      this.router.navigate(['/congratulations']);
    });
  }

}
