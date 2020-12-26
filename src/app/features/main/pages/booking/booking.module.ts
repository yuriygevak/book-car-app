import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgCalendarModule  } from 'ionic2-calendar';

import { BookingPage } from './booking.page';
import { BookingPageRoutingModule } from './booking-routing.module';
import { CalendarModalComponent } from '../../modals';
import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';

@NgModule({
  declarations: [
    BookingPage,
    CalendarModalComponent,
  ],
  imports: [
    CommonModule,
    BackLinkModule,
    BookingPageRoutingModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    ReactiveFormsModule,
  ],
})
export class BookingPageModule {}
