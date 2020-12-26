import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { PaymentPage } from './payment.page';

@NgModule({
  declarations: [PaymentPage],
  imports: [
    CommonModule,
    BackLinkModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule
  ],
})
export class PaymentPageModule {}
