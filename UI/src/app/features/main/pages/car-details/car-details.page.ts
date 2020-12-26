import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { CarDetails } from '../../models';
import { Navigation } from '../../../../common/core/models';
import { advantages } from './constants/advantages';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarDetailsPage implements OnInit {
  advantages: Navigation[] = advantages;
  // todo: should be dynamically from BE by ID of car
  carDetails: CarDetails = {
    name: 'Mercedes-Benz S-Class Limousine',
    description: 'The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for "special class", abbreviated as "S-Klasse"), ' +
      'is a series of full-size luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz, a division ' +
      'of German company Daimler AG. The S-Class is the designation for top-of-the-line Mercedes-Benz models and was officially ' +
      'introduced in 1972 with the W116, and has remained in use ever since. The S-Class is the flagship vehicle for Mercedes-Benz.',
    email: 'parkplaza@gmail.com',
    phone: '+91-8729838721',
    price: 150,
    rating: 50,
  };
  rating: string[] = [
    'star-outline',
    'star-outline',
    'star-outline',
    'star-outline',
    'star-outline'
  ];
  showDescription = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getRateingStars();
  }

  goToBooking(): void {
    // todo
    this.router.navigate(['/booking']);
  }

  getRateingStars(): void {
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

  goToGallery(): void {
    this.router.navigate(['/gallery']);
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

}
