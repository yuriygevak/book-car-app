import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthService } from '../../../auth/services';
import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { TabBarModule } from '../../../../common/share/components/tab-bar/tap-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackLinkModule,
    ProfilePageRoutingModule,
    TabBarModule,
  ],
  declarations: [ProfilePage],
  providers: [AuthService]
})
export class ProfilePageModule {}
