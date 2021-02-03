import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-auth-warning-modal',
  templateUrl: './auth-warning-modal.component.html',
  styleUrls: ['./auth-warning-modal.component.scss'],
})
export class AuthWarningModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit(): void {}

  dismiss(authNavigateConfirm: boolean): void {
    this.modalController.dismiss({
      'auth': authNavigateConfirm
    });
  }

}
