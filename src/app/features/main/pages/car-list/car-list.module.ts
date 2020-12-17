import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarCardComponent } from '../../components';
import { CarListPage } from './car-list.page';
import { CarListPageRoutingModule } from './car-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarListPageRoutingModule
  ],
  declarations: [
    CarCardComponent,
    CarListPage,
  ]
})
export class CarListPageModule {}
