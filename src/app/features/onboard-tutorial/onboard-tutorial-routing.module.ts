import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnboardTutorialComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: OnboardTutorialComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardTutorialRoutingModule {}
