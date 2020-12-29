import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { advantages } from './constants';
import { ApiService } from '../../services';
import { CarDetails } from './models';
import { Navigation } from '../../../../common/core/models';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarDetailsPage implements OnInit {
  advantages: Navigation[] = advantages;
  carDetails: CarDetails = null;
  rating: string[] = [
    'star-outline',
    'star-outline',
    'star-outline',
    'star-outline',
    'star-outline'
  ];
  showDescription = false;
  showSpinner = false;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const selectedCar = data.selectedCar;
        this.getCarDetails(selectedCar.id);
      });
  }

  goToBooking(): void {
    // todo: pass selected car
    this.router.navigate(['/booking']);
  }

  goToGallery(): void {
    this.router.navigate(['/gallery']);
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  private getRatingStars(): void {
    const starsQty = 5;
    const percentPerItem = 20;
    const fullStarClassName = 'star';
    const halfStarClassName = 'star-half';
    const emptyStarClassName = 'star-outline';
    for (let i = 1; i <= starsQty; i++) {
      this.rating[i - 1] = this.carDetails.rating && this.carDetails.rating >= percentPerItem * i
        ? fullStarClassName
        : this.carDetails.rating === percentPerItem * i - percentPerItem / 2
          ? halfStarClassName
          : emptyStarClassName;
    }
  }

  private getCarDetails(carId: string): void {
    this.apiService.getCarDetails(carId).subscribe(async resp => {
      this.carDetails = resp;
      this.getRatingStars();

      this.showSpinner = false;
      this.cdr.markForCheck();
    });
  }

}
