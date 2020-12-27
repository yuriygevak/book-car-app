import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryPage implements OnInit {
  carName = 'car name';
  // todo: should be from BE
  carImages: string[] = [
    'assets/images/cadillac_escalade_1.jpg',
    'assets/images/cadillac_escalade_2.jpg',
    'assets/images/cadillac_escalade_3.jpg',
    'assets/images/cadillac_escalade_4.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
