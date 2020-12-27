import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CarInfo } from '../models';

@Injectable()
export class ApiService {
  // todo: local url for development
  url = 'http://localhost:5001/book-car-mobile/us-central1/expressApp';

  constructor(private http: HttpClient) {}

  getCarList(): Observable<CarInfo[]> {
    return this.http.get<CarInfo[]>(`${this.url}/carList`);
  }

}
