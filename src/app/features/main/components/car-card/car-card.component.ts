import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { CarInfo } from '../../models';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardComponent implements OnInit {
  @Input() car: CarInfo;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  flagCar(): void {
    // todo
  }

  goToBooking(): void {
    this.router.navigate(['/booking']);
  }

  viewCarDetails(): void {
    // todo
    this.router.navigate(['/car-details']);
  }

}
