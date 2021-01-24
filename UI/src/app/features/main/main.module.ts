import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import {
  ApiService,
  BookingDetailsStorageService,
  CarStorageService
} from './services';
import { AuthService } from '../auth/services';
import { PaymentGuard } from './guards';
import { MainComponent } from './containers';
import { MainRoutingModule } from './main-routing.module';

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
    AuthService,
    BookingDetailsStorageService,
    CarStorageService,
    PaymentGuard
  ]
})
export class MainModule { }
