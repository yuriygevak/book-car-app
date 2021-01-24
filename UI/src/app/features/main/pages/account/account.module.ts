import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { AccountPageRoutingModule } from './account-routing.module';
import { BackLinkModule } from '../../../../common/share/components/back-link/back-link.module';
import { TabBarModule } from '../../../../common/share/components/tab-bar/tap-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    BackLinkModule,
    TabBarModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
