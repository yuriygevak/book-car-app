import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { CalendarModalComponent } from '../../modals';
import { setFormState } from '../../../../common/core/utils';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingPage implements OnInit {
  form: FormGroup;
  phoneRegex = '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})';
  price: {oneWay: number; return: number} = {oneWay: 1, return: 2};
  selectedTime: Date = null;
  showFormError = false;
  tripArrivals: string[] = [];
  trips: FormArray;
  @ViewChild('bookingTitle', {static: false}) titleEl: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              public modalController: ModalController,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  navigateBack(): void {
    this.location.back();
  }

  submitForm(): void {
    // if (!this.form.valid) {
    //   setFormState(this.form.controls['contacts']);
    //   setFormState(this.form.controls['trip']);
    //   this.showFormError = true;
    //   setTimeout(() => {
    //     this.showFormError = false;
    //   }, 1000);
    // } else {
    //   this.router.navigate(['/payment']);
    // }
    this.router.navigate(['/payment']);
  }

  async openCalendar() {
    const modal = await this.modalController.create({
      component: CalendarModalComponent,
      cssClass: 'calendar-modal',
      mode: 'md',
      showBackdrop: true
    });

    modal.onDidDismiss()
      .then((modalData) => {
        this.form.get('trip').get('date').patchValue(modalData.data?.selectedTime, {emitEvent: false});
        this.selectedTime = modalData.data?.selectedTime;
      });
    return await modal.present();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      contacts: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
        email: ['', [Validators.required, Validators.email]],
      }),
      trip: this.formBuilder.group({
        arrival: [null, Validators.required],
        dropOff: [null, Validators.required],
        date: [null, Validators.required],
        flight: '',
        notes: '',
      }),
      // todo: no need for demo
      // agreeCheck: [false, Validators.required]
    });
  }

}
