import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ApiService, CarStorageService } from '../../services';
import { BookingDetails, CarInfo, User } from '../../models';

@Component({
    selector: 'app-user-bookings',
    templateUrl: './user-bookings.page.html',
    styleUrls: ['./user-bookings.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBookingsPage implements OnInit {
    showSpinner = true;
    user: User = null;
    userBookings: BookingDetails[] = [];

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private apiService: ApiService,
                private carStorageService: CarStorageService,
                private cdr: ChangeDetectorRef,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.route.data
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
                this.user = data.user;

                if (this.user) {
                    this.getBookingsData();
                } else {
                    this.showSpinner = false;
                }
            });
    }

    cancelBooking(bookingId: string): void {
        this.showSpinner = true;
        this.apiService.removeBooking(bookingId).subscribe(() => {
            this.getBookingsData();
        },
        error => {
            this.showSpinner = false;
            console.error(error);
        });
    }

    navigateToCarDetails(car: CarInfo): void {
        this.carStorageService.setStoredCar(car);
        this.router.navigate(['/car-details']);
    }

    private getBookingsData(): void {
        forkJoin([
            this.apiService.getBookings(this.user.uid),
            this.apiService.getCarList()
        ]).subscribe(data => {
            if (data[0].length) {
                this.userBookings = data[0].map((booking: BookingDetails) => {
                    booking.carDetails = data[1].find((car: CarInfo) => booking.carId === car.id);
                    return booking;
                });
            }
            this.showSpinner = false;
            this.cdr.markForCheck();
        },
        error => {
            this.showSpinner = false;
            console.error(error);
        });
    }

}
