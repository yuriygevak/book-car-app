import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ApiService } from './services';
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
    ApiService
  ]
})
export class MainModule { }
