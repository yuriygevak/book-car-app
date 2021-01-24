import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBookingsPage } from './user-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: UserBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBookingsPageRoutingModule {}
