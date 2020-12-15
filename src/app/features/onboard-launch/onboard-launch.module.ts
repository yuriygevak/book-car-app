import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardLaunchComponent } from './onboard-launch.component';
import { OnboardLaunchRoutingModule } from './onboard-launch-routing.module';

@NgModule({
  declarations: [
    OnboardLaunchComponent
  ],
  imports: [
    CommonModule,
    OnboardLaunchRoutingModule
  ]
})
export class OnboardLaunchModule { }
