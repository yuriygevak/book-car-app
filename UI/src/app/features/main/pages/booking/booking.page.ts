import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { BookingDetailsStorageService } from '../../services';
import { BookingDetails } from '../../models';
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
  selectedTime: Date = null;
  showFormError = false;
  @ViewChild('bookingTitle', {static: false}) titleEl: ElementRef;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private bookingDetailsStorageService: BookingDetailsStorageService,
              private formBuilder: FormBuilder,
              public modalController: ModalController,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        const bookingDetails: BookingDetails = data.bookingDetails;
        this.initForm();
        if (bookingDetails) {
          this.form.patchValue(bookingDetails, {emitEvent: false});
        }
      });
  }

  submitForm(): void {
    if (!this.form.valid) {
      setFormState(this.form.controls['contacts']);
      setFormState(this.form.controls['trip']);
      this.showFormError = true;
      this.titleEl.nativeElement.scrollIntoView({behavior: 'smooth'});
      setTimeout(() => {
        this.showFormError = false;
      }, 1000);
    } else {
      this.bookingDetailsStorageService.setStoredBookingDetails(this.form.value);
      this.router.navigate(['/payment']);
    }
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
        this.form.get('date').patchValue(modalData.data?.selectedTime, {emitEvent: false});
        this.selectedTime = modalData.data?.selectedTime;
      });
    return await modal.present();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
      email: ['', [Validators.required, Validators.email]],
      arrival: [null, Validators.required],
      dropOff: [null, Validators.required],
      date: [null, Validators.required],
      flight: '',
      notes: '',
    });
  }

}
