import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { paymentMethods } from './constants';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPage implements OnInit {
  // todo: amount should be from BE
  amount = 150;
  paymentMethods = paymentMethods;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  choosePayMethod(): void {
    // todo: just skip method go to congratulations page
    this.router.navigate(['/congratulations']);
  }

}
