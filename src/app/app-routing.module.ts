import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { OnboardTutorialGuard } from './common/core/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'onboard-tutorial',
    loadChildren: () => import('./features/onboard-tutorial/onboard-tutorial.module').then(m => m.OnboardTutorialModule),
  },
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    canLoad: [OnboardTutorialGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
