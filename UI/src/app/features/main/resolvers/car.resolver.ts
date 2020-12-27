import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { CarInfo } from '../models';
import { CarStorageService } from '../services';

@Injectable()
export class CarResolver implements Resolve<CarInfo> {

  constructor(private carStorageService: CarStorageService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<CarInfo> {
    return this.carStorageService.getStoredCar();
  }
}
