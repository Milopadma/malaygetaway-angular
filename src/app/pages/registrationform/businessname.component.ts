import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
import { ButtonwIcon } from '../../components/button.component';
import { z } from 'zod';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';
import { Subject } from 'rxjs';
import { ProgressBarComponent } from '../../components/form/progressbar.component';

@Component({
  selector: 'businessname-form',
  standalone: true,
  template: `
    <form #merchantDataForm="ngForm" (ngSubmit)="onSubmit(merchantDataForm)">
      <progress-bar
        [labels]="['Business name', 'Details', 'Documents', 'Done']"
        [current]="'Business name'"
      />
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
          (ngModelChange)="onBusinessNameChange($event)"
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
  imports: [RouterOutlet, FormsModule, ButtonwIcon, ProgressBarComponent],
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
    private mrs: MerchantRegistrationService,
    private apiService: ApiService
  ) {
    // init new business from global state
    this.merchantDataForm = new NgForm([], []);

    // Check username availability with debounce
    this.businessNameSubject
      .pipe(
        debounceTime(300), // Wait for 300ms of silence
        switchMap((name) => this.apiService.checkMerchantName(name)) // Switch to new search observable each time
      )
      .subscribe(
        (response) => {
          console.log('Response from backend', response);
          if (response.code == 200) {
            this.nameError.status = false;
            this.nameError.message = null;
          } else {
            this.nameError.status = true;
            this.nameError.message = 'Name is already taken';
          }
        },
        (error) => {
          console.log('Error from backend', error);
          this.nameError.status = true;
          this.nameError.message = 'Name is already taken';
        }
      );
  }
  private businessNameSubject = new Subject<string>();

  // Call this method whenever the business name changes
  onBusinessNameChange(name: string) {
    this.businessNameSubject.next(name);
  }

  onFormChange() {
    try {
      // this will throw an error if the data is invalid
      const validatedData = this.BusinessSchema.parse(this.business);
      this.nameError.status = false; // clear previous error
      this.nameError.message = null; // clear previous error
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
      if (this.nameError.status) {
        // If there's an error, don't submit the form
        return;
      }
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
    if (this.nameError.status) {
      // If there's an error, don't submit the form
      return;
    }
    this.onSubmit(this.merchantDataForm);
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/details']); // replace '/nextPage' with the actual route
  }
}
