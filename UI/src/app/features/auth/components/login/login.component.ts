import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() resetPasswordEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  resetPassword(): void {
    this.resetPasswordEvent.emit(true);
  }

}
