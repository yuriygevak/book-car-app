import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthComponent, LoginComponent, RegisterComponent } from './components';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services';
import { BackLinkModule } from '../../common/share/components/back-link/back-link.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BackLinkModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
