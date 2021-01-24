import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CongratulationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
