import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { AuthService } from '../../services';
import { setFormState } from '../../../../common/core/utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  currentPage = 'login';
  errorMessage: string;
  form: FormGroup;
  isResetPassword = false;
  resetPasswordForm: FormGroup;
  showError = false;
  showResetPasswordVerifyMessage = false;
  showVerificationMessage = false;

  constructor(private authService: AuthService,
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params && params.authOption) {
        this.currentPage = params.authOption;
        this.initForm();
        this.cdr.markForCheck();
      }
    });

    this.initForm();
  }

  switchForm(authOption: string): void {
    this.isResetPassword = false;
    this.initForm();
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { authOption }
    });
  }

  switchToResetPassword(event: boolean): void {
    this.isResetPassword = event;
    this.initResetPasswordForm();
  }

  switchBackToLogin(): void {
    this.isResetPassword = false;
    this.initForm();
  }

  private checkPasswords(): boolean {
    const passValue = this.form.get('password').value;
    const confirmPassValue = this.form.get('confirmPassword').value;

    return passValue === confirmPassValue;
  }

  private initForm(): void {
    if (this.currentPage === 'login') {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    } else {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      });
    }
  }

  private initResetPasswordForm(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  private resetPassword(): void {
    this.authService.resetPassword(this.resetPasswordForm.value.email)
      .then(() => {
        this.showResetPasswordVerifyMessage = true;
        this.cdr.markForCheck();
        return;
      })
      .catch(err => {
        console.log('err', err);
        this.errorMessage = err.message ? err.message : 'Reset password failed, please try again';
        this.showFormError();
        return;
      });
  }

  private showFormError() {
    this.showError = true;
    this.cdr.markForCheck();

    setTimeout(() => {
      this.showError = false;
      this.cdr.markForCheck();
    }, 10000);
  }

  async login(): Promise<void> {
    try {
      const userCreds = await this.authService.login(this.form.value);

      if (!userCreds?.user?.emailVerified) {
        this.errorMessage = 'Please verify your email before login. Click on the link that has been sent to your email account.';
        this.showFormError();
      }

      this.router.navigate(['/profile']);

    } catch (err) {
      this.errorMessage = err.message ? err.message : 'Login failed, please try again';
      this.showFormError();
      return;
    }
  }

  async register(): Promise<void> {
    if (!this.checkPasswords()) {
      const confirmControl: AbstractControl = this.form.get('confirmPassword');
      confirmControl.markAsTouched();
      confirmControl.setErrors({incorrect: true});
      this.errorMessage = 'Confirm password is incorrect';
      this.showFormError();
      return;
    } else {
      try {
        const userCreds = await this.authService.register(this.form.value);
        await userCreds.user.updateProfile({
          displayName: this.form.get('name').value
        });
        await this.authService.sendEmailVerification();
        this.showVerificationMessage = true;
        this.cdr.markForCheck();
        return;
      } catch (err) {
        console.log('err: ', err);
        this.errorMessage = err.message ? err.message : 'Registration failed, please try again';
        this.showFormError();
        return;
      }
    }
  }

  async submit(): Promise<void> {
    if (this.showError) {
      this.showError = false;
    }

    if (this.isResetPassword) {
      if (this.resetPasswordForm.invalid) {
        setFormState(this.isResetPassword);
        this.errorMessage = 'Please fill email field correctly';
        this.showFormError();
        return;
      } else {
        this.resetPassword();
      }
    } else {
      if (this.form.invalid) {
        setFormState(this.form);
        this.errorMessage = 'Please fill all fields correctly';
        this.showFormError();
        return;
      } else {
        if (this.currentPage === 'login') {
          await this.login();
        } else {
          await this.register();
        }
      }
    }
  }

}
