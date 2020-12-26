import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CarInfo } from '../../models';
import { tabs } from '../../../../common/core/constants';
import { Navigation } from '../../../../common/core/models';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListPage implements OnInit {
  // TODO: should get from firebase
  carList: CarInfo[] = [
    {
      class: 'luxury class',
      imgPath: 'assets/icons/car-1.png',
      id: '1',
      name: 'Mercedes-Benz S-Class Limousine',
      price: 150,
    },
    {
      class: 'luxury class',
      imgPath: 'assets/icons/car-2.png',
      id: '2',
      name: 'Kia Carnival Hi-Limousine',
      price: 150,
    },
    {
      class: 'luxury class',
      imgPath: 'assets/icons/car-1.png',
      id: '3',
      name: 'Mercedes-Benz S-Class Limousine',
      price: 150,
    },
    {
      class: 'luxury class',
      imgPath: 'assets/icons/car-2.png',
      id: '4',
      name: 'Kia Carnival Hi-Limousine',
      price: 150,
    },
  ];
  tabs: Navigation[] = tabs;

  constructor() { }

  ngOnInit(): void {
  }

}
