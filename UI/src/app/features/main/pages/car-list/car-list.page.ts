import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ApiService } from '../../services';
import { CarInfo } from '../../models';
import { Navigation } from '../../../../common/core/models';
import { tabs } from '../../../../common/core/constants';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListPage implements OnInit {
  carList: CarInfo[] = [];
  showSpinner = false;
  tabs: Navigation[] = tabs;

  constructor(private apiService: ApiService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.apiService.getCarList().subscribe(resp => {
      this.carList = resp;
      this.showSpinner = false;
      this.cdr.markForCheck();
    });
  }

}
