import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { CongratulationsPageRoutingModule } from './congratulations-routing.module';
import { CongratulationsPage } from './congratulations.page';

@NgModule({
  declarations: [
    CongratulationsPage
  ],
  imports: [
    CommonModule,
    BackLinkModule,
    FormsModule,
    IonicModule,
    CongratulationsPageRoutingModule,
  ],
})
export class CongratulationsPageModule {}
