import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnboardLaunchComponent } from './onboard-launch.component';

const routes: Routes = [
    {
        path: '',
        component: OnboardLaunchComponent,
        // children: [
        //     {
        //         path: 'home',
        //         loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
        //     },
        // ]
    },
    {
        path: '**',
        // redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnboardLaunchRoutingModule {}
