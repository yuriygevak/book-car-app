import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import {
  ApiService,
  BookingDetailsStorageService,
  CarStorageService
} from './services';
import { MainComponent } from './containers';
import { MainRoutingModule } from './main-routing.module';
import { PaymentGuard } from './guards';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MainRoutingModule
  ],
  providers: [
    ApiService,
    BookingDetailsStorageService,
    CarStorageService,
    PaymentGuard
  ]
})
export class MainModule { }
