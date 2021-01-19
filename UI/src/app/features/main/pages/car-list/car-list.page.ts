import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ApiService } from '../../services';
import { CarInfo } from '../../models';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListPage implements OnInit {
  carList: CarInfo[] = [];
  showSpinner = false;

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
