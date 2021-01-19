import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabBarComponent } from './tab-bar.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [
        TabBarComponent,
    ],
    exports: [
        TabBarComponent,
    ]
})
export class TabBarModule {}
