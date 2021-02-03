import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { first } from 'rxjs/operators';

import { AuthService } from '../../auth/services';
import { AuthWarningModalComponent } from '../modals';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                public modalController: ModalController,
                private router: Router) {}

    async canActivate(): Promise<boolean> {
        const user = await this.authService.getAuthState().pipe(first()).toPromise();
        if (!user) {
            const authNavigateConfirm = await this.showAuthWarningModal();
            if (authNavigateConfirm.data && authNavigateConfirm.data.auth) {
                this.router.navigate(['/auth'], { queryParams: { authOption: 'login' }});
                return true;
            } else {
                this.router.navigate([this.router.url]);
                return false;
            }
        }
    }

    async showAuthWarningModal(): Promise<any> {
        const modal = await this.modalController.create({
            component: AuthWarningModalComponent,
            cssClass: 'auth-warning-modal',
            showBackdrop: true,
            backdropDismiss: true
        });
        await modal.present();
        return await modal.onDidDismiss();
    }

}
