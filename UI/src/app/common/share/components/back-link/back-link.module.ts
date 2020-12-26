import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { BackLinkComponent } from './back-link.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    BackLinkComponent,
  ],
  exports: [
    BackLinkComponent,
  ]
})
export class BackLinkModule {}
