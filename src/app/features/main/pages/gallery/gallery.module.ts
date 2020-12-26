import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { GalleryPage } from './gallery.page';

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    BackLinkModule,
  ],
})
export class GalleryPageModule {}
