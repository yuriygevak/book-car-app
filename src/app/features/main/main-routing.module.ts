import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
