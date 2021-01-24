import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../models';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPage implements OnInit {
  user: User = null;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          this.user = data.user;
        });
  }

}
