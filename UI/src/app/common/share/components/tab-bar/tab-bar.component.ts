import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Navigation } from '../../../core/models';
import { tabs } from '../../../core/constants';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBarComponent implements OnInit {

  tabs: Navigation[] = tabs;

  constructor() { }

  ngOnInit() {}

}
