import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { CarInfo } from '../models';

@Injectable()
export class CarStorageService {

  constructor(private storage: Storage) {}

  async getStoredCar(): Promise<CarInfo> {
    return await this.storage.get('selectedCar');
  }

  async setStoredCar(car: CarInfo) {
    await this.storage.set('selectedCar', car);
  }

}
