import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { CarInfo } from '../../models';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarCardComponent implements OnInit {
  @Input() car: CarInfo;

  constructor() { }

  ngOnInit(): void {}

  flagCar(car: CarInfo): void {
    // todo
  }

  goToBook(car: CarInfo): void {
    // todo
  }

}
