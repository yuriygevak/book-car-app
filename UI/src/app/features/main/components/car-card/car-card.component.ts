import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { CarInfo } from '../../models';
import { CarStorageService } from '../../services';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardComponent implements OnInit {
  @Input() car: CarInfo;

  constructor(private carStorageService: CarStorageService,
              private router: Router) { }

  ngOnInit(): void {}

  flagCar(): void {
    // todo
  }

  goToBooking(): void {
    this.selectCar();
    this.router.navigate(['/booking']);
  }

  selectCar(): void {
    this.carStorageService.setStoredCar(this.car);
  }

  viewCarDetails(): void {
    this.selectCar();
    this.router.navigate(['/car-details']);
  }

}
