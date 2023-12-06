import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'merchantdata-form',
  template: `
    <form #merchantDataForm="ngForm" (ngSubmit)="onSubmit(merchantDataForm)">
      <div class="flex flex-col">
        <h1
          class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
        >
          Lets get to know each other.
        </h1>
        <input
          type="text"
          name="username"
          [(ngModel)]="name"
          #name="ngModel"
          required
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="username"
        />
        <!-- field required error -->
        <div [hidden]="name.valid || name.pristine" class="text-reject">
          Please enter a valid username.
        </div>

        <input
          type="password"
          name="password"
          [(ngModel)]="password"
          #password="ngModel"
          required
          pattern="^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="password"
        />
        <!-- password error -->
        <div [hidden]="password.valid || password.pristine" class="text-reject">
          Password must be at least 8 characters, contain letters and numbers.
        </div>

        <input
          type="tel"
          name="contactNumber"
          [(ngModel)]="contactNumber"
          #contactNumber="ngModel"
          required
          pattern="^[0-9]*$"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="your contact number"
        />
        <!-- phone number error -->
        <div
          [hidden]="contactNumber.valid || contactNumber.pristine"
          class="text-reject"
        >
          Please enter a valid phone number.
        </div>

        <input
          type="email"
          name="contactEmail"
          [(ngModel)]="contactEmail"
          #contactEmail="ngModel"
          required
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="your contact email"
        />
        <!-- email error -->
        <div
          [hidden]="contactEmail.valid || contactEmail.pristine"
          class="text-reject"
        >
          Please enter a valid email address.
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
    </form>
  `,
})
export class MerchantDataFormComponent {
  @ViewChild('merchantDataForm') merchantDataForm: NgForm;

  constructor(private router: Router) {
    this.merchantDataForm = new NgForm([], []);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form data:', form.value);
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
