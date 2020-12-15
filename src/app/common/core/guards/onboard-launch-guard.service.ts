import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Injectable()
export class OnboardLaunchGuard implements CanLoad {
    constructor(private router: Router,
                private storage: Storage) {}

    canLoad(route: Route): Promise<boolean> | boolean {
        return this.storage.get('onboardLaunch').then(onboardVal => onboardVal);
    }
}
