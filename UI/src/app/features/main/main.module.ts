import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import {
  ApiService,
  BookingDetailsStorageService,
  CarStorageService
} from './services';
import { AuthService } from '../auth/services';
import { AuthGuard, PaymentGuard } from './guards';
import { AuthWarningModalComponent } from './modals';
import { MainComponent } from './containers';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    AuthWarningModalComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MainRoutingModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    AuthService,
    BookingDetailsStorageService,
    CarStorageService,
    PaymentGuard
  ]
})
export class MainModule { }
