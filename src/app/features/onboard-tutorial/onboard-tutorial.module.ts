import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { OnboardTutorialComponent } from './components';
import { OnboardTutorialRoutingModule } from './onboard-tutorial-routing.module';

@NgModule({
  declarations: [
    OnboardTutorialComponent,
  ],
  imports: [
    CommonModule,
    OnboardTutorialRoutingModule,
    IonicModule,
  ]
})
export class OnboardTutorialModule { }
