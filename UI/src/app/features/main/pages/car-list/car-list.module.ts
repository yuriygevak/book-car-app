import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarCardComponent } from '../../components';
import { CarListPage } from './car-list.page';
import { CarListPageRoutingModule } from './car-list-routing.module';
import { TabBarModule } from '../../../../common/share/components/tab-bar/tap-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarListPageRoutingModule,
    TabBarModule
  ],
  declarations: [
    CarCardComponent,
    CarListPage,
  ]
})
export class CarListPageModule {}
