import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
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
export class AuthRoutingModule {}
