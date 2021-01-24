import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { TabBarModule } from '../../../../common/share/components/tab-bar/tap-bar.module';
import { UserBookingsPage } from './user-bookings.page';
import { UserBookingsPageRoutingModule } from './user-bookings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackLinkModule,
    TabBarModule,
    UserBookingsPageRoutingModule
  ],
  declarations: [UserBookingsPage]
})
export class UserBookingsPageModule {}
