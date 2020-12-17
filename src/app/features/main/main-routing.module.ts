import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'car-list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'car-list',
        loadChildren: () => import('./pages/car-list/car-list.module').then( m => m.CarListPageModule)
      },
      {
        path: 'car-details',
        loadChildren: () => import('./pages/car-details/car-details.module').then( m => m.CarDetailsPageModule)
      },
      {
        path: 'booking',
        loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'car-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
