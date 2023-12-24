import { HostListener, signal } from '@angular/core';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
import { ButtonwIcon } from '../../components/button.component';
import { z } from 'zod';
import { FormError } from '../../types';
import { Subject, debounceTime, switchMap } from 'rxjs';
import { ApiService } from '../../api/api.service';

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
          [(ngModel)]="merchant.contactNumber"
          (ngModelChange)="onContactNumberChange($event)"
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
          [(ngModel)]="merchant.contactEmail"
          (ngModelChange)="onEmailChange($event)"
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
          [(ngModel)]="merchant.description"
          (ngModelChange)="onDescriptionChange($event)"
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
  merchant = this.mrs.getMerchant();
  MerchantDataForm: NgForm;

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

  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService,
    private apiService: ApiService
  ) {
    this.MerchantDataForm = new NgForm([], []);
    // Check contactnumber availability with debounce
    this.contactNumberSubject
      .pipe(
        debounceTime(300),
        switchMap((number) =>
          this.apiService.checkMerchantContactNumber(number)
        )
      )
      .subscribe(
        (response) => {
          console.log('Response from backend', response);
          if (response.code == 200) {
            this.contactNumberError().isHidden = true;
            this.contactNumberError().message = null;
          } else {
            this.contactNumberError().isHidden = false;
            this.contactNumberError().message =
              'Contact number is already taken';
          }
        },
        (error) => {
          console.log('Error from backend', error);
          this.contactNumberError().isHidden = false;
          this.contactNumberError().message = 'Contact number is already taken';
        }
      );

    this.emailSubject
      .pipe(
        debounceTime(300),
        switchMap((email) => this.apiService.checkMerchantEmail(email))
      )
      .subscribe(
        (response) => {
          console.log('Response from backend', response);
          if (response.code == 200) {
            this.contactEmailError().isHidden = true;
            this.contactEmailError().message = null;
          } else {
            this.contactEmailError().isHidden = false;
            this.contactEmailError().message = 'Contact email is already taken';
          }
        },
        (error) => {
          console.log('Error from backend', error);
          this.contactNumberError().isHidden = false; // there was an error, so show the error
          this.contactNumberError().message = 'Contact email is already taken';
        }
      );
  }
  private contactNumberSubject = new Subject<number>();
  private emailSubject = new Subject<string>();

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.overflow = 'auto';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  // // update global state on form change
  // onFormChange() {
  //   try {
  //     // trigger the validation error if the data is invalid
  //     const validatedData = this.BusinessSchema.parse(this.merchant);
  //     this.isFormValid = true;
  //     console.log('Form is valid');
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       // ZodError.errors is an array of errors for each field
  //       // since we only have one field, we can just take the first error
  //       this.isFormValid = false;
  //       console.log('Form is not valid');
  //     }
  //   }

  //   this.mrs.setMerchant(this.merchant);
  // }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    try {
      // update local form data
      this.merchant.contactNumber = this.ContactNumberSchema.parse(
        form.value
      ).contactNumber;
      this.merchant.contactEmail = this.EmailSchema.parse(
        form.value
      ).contactEmail;
      this.merchant.description = this.DescriptionSchema.parse(
        form.value
      ).description;
      // then update global state with that form data
      this.mrs.setMerchant(this.merchant);
      console.log('Form data:', this.merchant);
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

  // Define separate Zod schemas for each field
  ContactNumberSchema = z.object({
    contactNumber: z.number(),
  });

  EmailSchema = z.object({
    contactEmail: z.string().email({ message: 'Invalid email' }),
  });

  DescriptionSchema = z.object({
    description: z.string(),
  });

  // Use the separate schemas in the onFieldChange methods
  onContactNumberChange(number: string) {
    const parsedNumber = parseInt(number, 10);
    if (isNaN(parsedNumber)) {
      this.contactNumberError.set({
        message: 'Invalid contact number',
        isHidden: false,
      });
      return;
    }
    this.contactNumberSubject.next(parsedNumber);
    this.contactNumberError.set({ message: null, isHidden: true });
    try {
      const validatedData = this.ContactNumberSchema.parse({
        contactNumber: parsedNumber,
      });
      this.isFormValid = true;
      console.log('Contact number is valid');
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.contactNumberError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
      }
    }
    this.merchant.contactNumber = parsedNumber;
    this.mrs.setMerchant(this.merchant);
  }

  onEmailChange(email: string) {
    this.emailSubject.next(email);
    this.contactEmailError.set({ message: null, isHidden: true });
    try {
      const validatedData = this.EmailSchema.parse({ contactEmail: email });
      this.isFormValid = true;
      console.log('Email is valid');
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.contactEmailError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
      }
    }
    this.merchant.contactEmail = email;
    this.mrs.setMerchant(this.merchant);
  }

  onDescriptionChange(description: string) {
    this.descriptionError.set({ message: null, isHidden: true });
    try {
      const validatedData = this.DescriptionSchema.parse({
        description: description,
      });
      this.isFormValid = true;
      console.log('Description is valid');
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.descriptionError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
      }
    }
    this.merchant.description = description;
    this.mrs.setMerchant(this.merchant);
  }
  navigateToNextPage() {
    // this.router.navigate(['/merchant/register/merchantdata']);
    this.router.navigate(['/merchant/register/complete']);
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onSubmit(this.MerchantDataForm);
  }
}
