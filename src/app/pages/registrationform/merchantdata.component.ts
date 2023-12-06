import {
  HostListener,
  NgModule,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  NavigationExtras,
} from '@angular/router';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { Merchant } from '../../types/merchant';
import { MerchantRegistrationService } from './merchantregistration.service';

@Component({
  selector: 'merchantdata-form',
  template: `
    <form
      #merchantDataForm="ngForm"
      (ngSubmit)="onSubmit(merchantDataForm)"
      (ngModelChange)="onFormChange(merchantDataForm)"
    >
      <div class="flex flex-col">
        <h1
          class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
        >
          Lets get to know each other.
        </h1>
        <div class="h-4" id="spacer"></div>
        <div class="flex flex-col gap-4">
          <div>
            <input
              type="text"
              id="name"
              required
              [(ngModel)]="merchant.username"
              name="name"
              #name="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-2 border-2 border-solid max-md:pl-1"
              placeholder="username"
            />
            <!-- field required error -->
            <div [hidden]="name.valid || name.pristine" class="text-reject">
              Name is required.
            </div>
          </div>

          <div class="relative">
            <input
              [type]="hidePassword ? 'password' : 'text'"
              name="password"
              [(ngModel)]="merchant.password"
              #password="ngModel"
              required
              pattern="^(?=.*[A-Za-z])(?=.*d).{8,}$"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-2 border-2 border-solid max-md:pl-1"
              placeholder="password"
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 pr-3 flex items-center"
              (click)="hidePassword = !hidePassword"
            >
              <img
                *ngIf="hidePassword; else showPasswordIcon"
                src="assets/icons/codicon_eye-closed.svg"
                alt="Show password"
              />
              <ng-template #showPasswordIcon>
                <img src="assets/icons/codicon_eye.svg" alt="Hide password" />
              </ng-template>
            </button>
          </div>
          <!-- password error -->
          <div
            [hidden]="password.valid || password.pristine"
            class="text-reject max-w-[412px]"
          >
            Password must be at least 8 characters, contain letters and numbers.
          </div>

          <div>
            <input
              type="tel"
              name="contactNumber"
              [(ngModel)]="merchant.phoneNumber"
              #contactNumber="ngModel"
              required
              pattern="^[0-9]*$"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-2 border-2 border-solid max-md:pl-1"
              placeholder="your contact number"
            />
            <!-- phone number error -->
            <div
              class="text-reject"
              [hidden]="contactNumber.valid || contactNumber.pristine"
            >
              Please enter a valid phone number.
            </div>
          </div>
          <div>
            <input
              type="email"
              name="contactEmail"
              [(ngModel)]="merchant.email"
              #contactEmail="ngModel"
              required
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-2 border-2 border-solid max-md:pl-1"
              placeholder="your contact email"
            />
            <!-- email error -->
            <div
              class="text-reject"
              [hidden]="contactEmail.valid || contactEmail.pristine"
            >
              Please enter a valid email address.
            </div>
          </div>
          <div class="h-32" id="spacer"></div>
          <div class="flex flex-col items-end" type="submit">
            <buttonwicon type="submit" label="Continue"></buttonwicon>
            <p
              class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
            >
              or press Enter
            </p>
          </div>
        </div>
      </div>
    </form>
  `,
})
export class MerchantDataFormComponent implements OnChanges {

  @ViewChild('merchantDataForm') merchantDataForm: NgForm;
  hidePassword: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private mrs: MerchantRegistrationService) {
    this.merchantDataForm = new NgForm([], []);
    this.hidePassword = true;
  }

  merchant = this.mrs.merchant;

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

  onFormChange(formValue: any) {
    console.log('Form value:', formValue);
    const navigationExtras: NavigationExtras = {
      queryParams: formValue,
      replaceUrl: true,
    };
    this.router.navigate([], navigationExtras);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.merchant = form.value;
      console.log('Form data:', this.merchant);
      this.navigateToNextPage();
    } else {
      console.log('Form is not valid');
    }
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/complete']);
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.merchantDataForm.valid) {
      this.navigateToNextPage();
    }
  }
}

@NgModule({
  declarations: [MerchantDataFormComponent],
  exports: [MerchantDataFormComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FormsModule,
  ],
})
export class MerchantDataFormComponentModule {}
