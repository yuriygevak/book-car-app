import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { formatDate } from '@angular/common';

import { ModalController } from '@ionic/angular';

import { CalendarComponent } from 'ionic2-calendar/calendar';

// todo: needs refactoring
@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.scss'],
})
export class CalendarModalComponent implements AfterViewInit, OnInit {
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  // todo: check if is necessary
  // event = {
  //   title: '',
  //   desc: '',
  //   startTime: null,
  //   endTime: '',
  //   allDay: true
  // };
  eventSource = [];
  modalReady = false;
  selectedTime: Date = null;
  viewTitle: string;

  @ViewChild(CalendarComponent) ionCalendar: CalendarComponent;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  back() {
    this.ionCalendar.slidePrev();
  }

  changeMode(mode): void {
    this.calendar.mode = mode;
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

  loadEvents() {
    // todo: need to load events from server
    this.eventSource = [];
  }

  next(): void {
    this.ionCalendar.slideNext();
  }

  // onEventSelected(event): void {
  //   this.event.startTime = new Date(event.selectedTime);
  // }

  onTimeSelected(event): void {
    this.selectedTime = new Date(event.selectedTime);
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title): void {
    this.viewTitle = title;
  }

  save(): void {
    this.modalCtrl.dismiss({selectedTime: this.selectedTime});
  }

}
