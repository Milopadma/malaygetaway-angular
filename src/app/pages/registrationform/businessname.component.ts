import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
import { ButtonwIcon } from '../../components/button.component';
import { z } from 'zod';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'businessname-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ButtonwIcon],
  template: `
    <form #merchantDataForm="ngForm" (ngSubmit)="onSubmit(merchantDataForm)">
      <div class="flex flex-col">
        <h1
          class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
        >
          What is your business <br />
          name?
        </h1>
        <input
          type="text"
          id="businessname"
          required
          [(ngModel)]="business.name"
          (ngModelChange)="onFormChange()"
          name="name"
          #name="ngModel"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="business name"
        />
        <!-- errors -->
        <div
          [class.opacity-100]="
            (name.touched || formSubmitted) && nameError.status
          "
          [class.translate-y-0]="
            (name.touched || formSubmitted) && nameError.status
          "
          [class.h-0]="!(name.touched || formSubmitted) || !nameError.status"
          class="text-reject transition-all ease-in-out duration-500 opacity-0 -translate-y-3/4 block h-8"
        >
          {{ nameError.message }}
        </div>
        <div class="h-32" id="spacer"></div>
        <div class="flex flex-col items-end" type="submit">
          <buttonwicon
            label="Continue"
            [disabled]="nameError.status"
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
export class BusinessNameFormComponent {
  // init new business from global state
  business = this.mrs.getMerchant();
  merchantDataForm: NgForm;

  // for the errors
  nameError: { status: boolean; message: string | null } = {
    status: true,
    message: 'Required',
  };
  formSubmitted: boolean = false;

  // zod schema for validating business name
  BusinessSchema = z.object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(16, 'Name must be at most 16 characters'),
  });

  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService
  ) {
    // init new business from global state
    this.merchantDataForm = new NgForm([], []);
  }

  onFormChange() {
    try {
      // this will throw an error if the data is invalid
      const validatedData = this.BusinessSchema.parse(this.business);
      this.nameError.status = false; // clear previous error
      this.nameError.message = null; // clear previous error

      // Check username availability with debounce
      if (this.mrs.checkUsername(this.business.name)) {
        this.nameError = { status: true, message: 'Username already taken' };
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // ZodError.errors is an array of errors for each field
        // since we only have one field, we can just take the first error
        this.nameError = { status: true, message: error.errors[0].message };
      }
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    try {
      const validatedData = this.BusinessSchema.parse(form.value);
      this.business.name = validatedData.name;
      this.mrs.setMerchant(this.business);
      console.log('Form data:', this.business);
      this.navigateToNextPage();
    } catch (error) {
      console.log('Form is not valid');
      console.log(error);
      if (error instanceof z.ZodError) {
        this.nameError = { status: true, message: error.errors[0].message };
      }
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onSubmit(this.merchantDataForm);
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/details']); // replace '/nextPage' with the actual route
  }
}
