import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CarInfo } from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryPage implements OnInit {
  carName = '';
  carImages: string[] = [];
  showSpinner = false;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private cdr: ChangeDetectorRef,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const selectedCar: CarInfo = data.selectedCar;
        this.carImages = selectedCar.gallery;
        this.carName = selectedCar.name;
        this.showSpinner = false;
        this.cdr.markForCheck();
      });
  }

}
