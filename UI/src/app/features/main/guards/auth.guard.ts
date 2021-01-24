import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthService } from '../../auth/services';

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(private authService: AuthService,
                private router: Router) {}

    canLoad(): Promise<boolean> {
        return this.authService.getAuthState().pipe(first()).toPromise().then(user => {
            // if (!user) {
            //     this.router.navigate(['/']);
            // }
            return !!user;
        });
    }

}
