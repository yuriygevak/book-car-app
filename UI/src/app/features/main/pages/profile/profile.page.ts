import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from '../../../auth/services';
import { Navigation } from '../../../../common/core/models';
import { profile } from './constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {
  isUserLogged = false;
  profileNavigation: Navigation[] = profile;
  showSpinner = true;

  constructor(private authService: AuthService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.checkUserLogin();
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.isUserLogged = false;
    });
  }

  private checkUserLogin(): void {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.isUserLogged = true;
      }
      this.showSpinner = false;
      this.cdr.markForCheck();
    });
  }

}
