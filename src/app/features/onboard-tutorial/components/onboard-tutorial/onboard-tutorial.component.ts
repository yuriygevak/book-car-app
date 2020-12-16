import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { slides } from '../../../../common/core/constants';
import { Slide } from '../../../../common/core/models';

@Component({
  selector: 'app-onboard-launch',
  templateUrl: './onboard-tutorial.component.html',
  styleUrls: ['./onboard-tutorial.component.scss'],
})
export class OnboardTutorialComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  slides: Slide[] = slides;

  constructor(private router: Router,
              private storage: Storage) {}

  ngOnInit(): void {}

  navigateToHome(): void {
    this.storage.set('onboardComplete', true);
    this.router.navigate(['/auth'], { queryParams: { authOption: 'register' }});
  }

  slideClick(slider, index): void {
    if (index < slides.length - 1) {
      slider.slideNext();
    } else {
      this.navigateToHome();
    }
  }

}
