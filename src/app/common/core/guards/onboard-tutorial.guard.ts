import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Injectable()
export class OnboardTutorialGuard implements CanLoad {

  constructor(private router: Router,
              private storage: Storage) {}

  canLoad(): Promise<boolean> {
    return this.storage.get('onboardComplete').then(isComplete => {
      if (!isComplete) {
        this.router.navigate(['/onboard-tutorial']);
      }
      return isComplete;
    });
  }

}
