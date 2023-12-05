import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

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
          ngModel
          required
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          ngModel
          required
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="password"
        />
        <input
          type="tel"
          name="contactNumber"
          ngModel
          required
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="your contact number"
        />
        <input
          type="email"
          name="contactEmail"
          ngModel
          required
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="your contact email"
        />
        <div class="h-32" id="spacer"></div>
        <div class="flex flex-col items-end" type="submit">
          <buttonwicon
            type="submit"
            label="Continue"
          ></buttonwicon>
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
