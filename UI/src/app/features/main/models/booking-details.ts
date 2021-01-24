import {CarInfo} from './car-info';

export class BookingDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  arrival: string;
  dropOff: string;
  date: Date;
  flight?: string;
  notes?: string;
  carId?: string;
  carDetails?: CarInfo;
  id: string;
}
