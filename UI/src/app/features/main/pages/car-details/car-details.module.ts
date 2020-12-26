import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { CarDetailsPageRoutingModule } from './car-details-routing.module';
import { CarDetailsPage } from './car-details.page';

@NgModule({
  imports: [
    CommonModule,
    BackLinkModule,
    FormsModule,
    IonicModule,
    CarDetailsPageRoutingModule
  ],
  declarations: [
    CarDetailsPage
  ]
})
export class CarDetailsPageModule {}
