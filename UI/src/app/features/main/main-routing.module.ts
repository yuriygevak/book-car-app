import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarResolver } from './resolvers';
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
        loadChildren: () => import('./pages/car-details/car-details.module').then( m => m.CarDetailsPageModule),
        resolve: { selectedCar: CarResolver }
      },
      {
        path: 'gallery',
        loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule),
        resolve: { selectedCar: CarResolver }
      },
      {
        path: 'booking',
        loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule),
        resolve: { selectedCar: CarResolver }
      },
      {
        path: 'payment',
        loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
      },
      {
        path: 'congratulations',
        loadChildren: () => import('./pages/congratulations/congratulations.module').then( m => m.CongratulationsPageModule)
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
  exports: [RouterModule],
  providers: [CarResolver]
})
export class MainRoutingModule {}
