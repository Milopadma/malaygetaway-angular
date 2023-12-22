import { HostListener, signal } from '@angular/core';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
import { ButtonwIcon } from '../../components/button.component';
import { z } from 'zod';
import { FormError } from '../../types';

@Component({
  selector: 'businessdetails-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ButtonwIcon],
  template: `
    <form #merchantDataForm="ngForm" (ngSubmit)="onSubmit(merchantDataForm)">
      <div class="flex flex-col transition-all duration-500 ease-in-out">
        <h1
          class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
        >
          Mind telling us more about your business?
        </h1>
        <input
          type="tel"
          id="contactNumber"
          required
          [(ngModel)]="business.contactNumber"
          (ngModelChange)="onFormChange()"
          name="contactNumber"
          pattern="^[0-9]*$"
          #contactNumber="ngModel"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="contact number"
        />
        <!-- errors -->
        <div
          class="{{
            !contactNumberError().isHidden && contactNumber.touched
              ? 'opacity-100 translate-y-0 h-8'
              : 'opacity-0 -translate-y-3/4 h-0'
          }} text-reject transition-all ease-in-out duration-500 block"
        >
          {{ contactNumberError().message }}
        </div>
        <input
          type="email"
          id="contactEmail"
          required
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          [(ngModel)]="business.contactEmail"
          (ngModelChange)="onFormChange()"
          name="contactEmail"
          #contactEmail="ngModel"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-2 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="contact email"
        />
        <!-- errors -->
        <div
          class="{{
            !contactEmailError().isHidden && contactEmail.touched
              ? 'opacity-100 translate-y-0 h-8'
              : 'opacity-0 -translate-y-3/4 h-0'
          }} text-reject transition-all ease-in-out duration-500 block"
        >
          {{ contactEmailError().message }}
        </div>
        <textarea
          id="description"
          required
          [(ngModel)]="business.description"
          (ngModelChange)="onFormChange()"
          name="description"
          #name="ngModel"
          #textarea
          #description="ngModel"
          (input)="autoResize(textarea)"
          class="text-black placeholder:text-fadedgray  h-32 text-paragraph leading-7 tracking-tighter border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-2 px-5 py-2 border-2 border-solid max-md:pl-1 resize-y"
          placeholder="brief company description"
          rows="1"
        ></textarea>
        <!-- errors -->
        <div
          class="{{
            !descriptionError().isHidden && description.touched
              ? 'opacity-100 translate-y-0 h-8'
              : 'opacity-0 -translate-y-3/4 h-0'
          }} text-reject transition-all ease-in-out duration-500 block"
        >
          {{ descriptionError().message }}
        </div>
        <div class="h-32" id="spacer"></div>
        <div
          class="flex flex-col items-end"
          type="submit"
          [ariaDisabled]="!isFormValid"
        >
          <buttonwicon label="Continue" [disabled]="!isFormValid"></buttonwicon>
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
export class BusinessDetailsFormComponent {
  // init new business from global state
  business = this.mrs.getBusiness();
  businessDataForm: NgForm;

  // for the errors
  contactNumberError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });
  contactEmailError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });
  descriptionError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });

  // form states
  formSubmitted: boolean = false;
  isFormValid: boolean = false;

  // zod schema for validating business object
  BusinessSchema = z.object({
    contactNumber: z
      .string()
      .min(6, { message: 'Invalid contact number' })
      .max(10, { message: 'Invalid contact number' }),
    contactEmail: z.string().email({ message: 'Invalid email' }),
    description: z.string().min(3, { message: 'Invalid description' }),
  });

  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService
  ) {
    this.businessDataForm = new NgForm([], []);
  }

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.overflow = 'auto';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // update global state on form change
  onFormChange() {
    // clear previous errors
    this.contactNumberError.set({ message: null, isHidden: true });
    this.contactEmailError.set({ message: null, isHidden: true });
    this.descriptionError.set({ message: null, isHidden: true });

    try {
      // trigger the validation error if the data is invalid
      const validatedData = this.BusinessSchema.parse(this.business);
      this.isFormValid = true;
      console.log('Form is valid');
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          if (err.path[0] === 'contactNumber') {
            this.contactNumberError.set({
              message: err.message,
              isHidden: false,
            });
          } else if (err.path[0] === 'contactEmail') {
            this.contactEmailError.set({
              message: err.message,
              isHidden: false,
            });
          } else if (err.path[0] === 'description') {
            this.descriptionError.set({
              message: err.message,
              isHidden: false,
            });
          }
        });
      }
    }

    this.mrs.setBusiness(this.business);
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    try {
      const validatedData = this.BusinessSchema.parse(form.value);
      // update local form data
      this.business.contactNumber = validatedData.contactNumber;
      this.business.contactEmail = validatedData.contactEmail;
      this.business.description = validatedData.description;
      // then update global state with that form data
      this.mrs.setBusiness(this.business);
      console.log('Form data:', this.business);
      this.navigateToNextPage();
    } catch (error) {
      console.log('Form is not valid');
      console.log(error);
      if (error instanceof z.ZodError) {
        this.contactNumberError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
        this.contactEmailError.set({
          message: error.errors[1].message,
          isHidden: false,
        });
        this.descriptionError.set({
          message: error.errors[2].message,
          isHidden: false,
        });
      }
    }
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/documents']);
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onSubmit(this.businessDataForm);
  }
}
