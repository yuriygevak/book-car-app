import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private authService: AuthService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          this.isUserLogged = !!data.user;
          this.cdr.markForCheck();
        });
  }

  logout(): void {
    this.authService.logout().then(() => {
      this.isUserLogged = false;
      this.cdr.markForCheck();
    });
  }

}
