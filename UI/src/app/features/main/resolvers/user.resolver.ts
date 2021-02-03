import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthService } from '../../auth/services';
import { User } from '../models';

@Injectable()
export class UserResolver implements Resolve<any> {

    constructor(private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<User> {
        return this.authService.getAuthState().pipe(first()).toPromise().then(user => {
            return user ? user.providerData[0] : user;
        });
    }
}
