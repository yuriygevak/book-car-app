import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BookingDetails, CarInfo } from '../models';
import { CarDetails} from '../pages/car-details/models';

@Injectable()
export class ApiService {
  // todo: local url for development
  url = 'http://localhost:5001/book-car-mobile/us-central1/expressApp';

  constructor(private http: HttpClient) {}

  getBookings(userId): Observable<BookingDetails[]> {
    const params = {
      userId
    };
    return this.http.get<BookingDetails[]>(`${this.url}/bookings`, {params});
  }

  getCarList(): Observable<CarInfo[]> {
    return this.http.get<CarInfo[]>(`${this.url}/carList`);
  }

  getCarDetails(id: string): Observable<CarDetails> {
    const params = { id };
    return this.http.get<CarDetails>(`${this.url}/carDetails`, { params });
  }

  removeBooking(id: string): Observable<BookingDetails[]> {
    const params = {
      id
    };
    return this.http.delete<BookingDetails[]>(`${this.url}/removeBooking`, {params});
  }

  saveBooking(booking: BookingDetails, carId: string): Observable<any> {
    // carId is for possible retrieving data on BE side
    const payload = {
      ...booking,
      carId
    };
    return this.http.post<any>(`${this.url}/saveBooking`, payload);
  }

}
