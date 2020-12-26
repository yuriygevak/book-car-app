import {
  ChangeDetectionStrategy,
  Component,
  Input, OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-link',
  templateUrl: './back-link.component.html',
  styleUrls: ['./back-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackLinkComponent implements OnChanges, OnInit {
  iconColor = '#fff';
  @Input() color: string;
  @Input() topPosition: number;

  constructor(private location: Location) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color && changes.color.currentValue) {
      switch (this.color) {
        case 'grey':
          this.iconColor = '#1f242b';
          break;
        case 'orange':
          this.iconColor = '#ee4f00';
          break;
        default:
          this.iconColor = this.color;
      }
    }
  }

  navigateBack(): void {
    this.location.back();
  }

}
