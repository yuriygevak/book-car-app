import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {OnboardLaunchGuard} from './common/core/guards/onboard-launch-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    // canLoad: [OnboardLaunchGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'onboard-launch',
    loadChildren: () => import('./features/onboard-launch/onboard-launch.module').then(m => m.OnboardLaunchModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
