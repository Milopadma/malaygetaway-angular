import { Component, HostListener, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantRegistrationService } from './merchantregistration.service';
import { FileInputComponent } from '../../components/form/fileinput.component';
import { ButtonwIcon } from '../../components/button.component';
import { z } from 'zod';
import { NgForm } from '@angular/forms';
import { FormError } from '../../types';
@Component({
  selector: 'businessfiles-form',
  standalone: true,
  imports: [ButtonwIcon, FileInputComponent],
  template: `
    <div class="flex flex-col items-start">
      <h1
        class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
      >
        Upload your business documents
      </h1>
      <div id="spacer" class="h-4"></div>
      <div class="flex flex-row gap-4">
        <fileinput
          (fileChanged)="handleFileChange($event)"
          label="Licenses"
        ></fileinput>
        <fileinput
          (fileChanged)="handleFileChange($event)"
          label="Testimonials"
        ></fileinput>
      </div>
      <div class="h-32" id="spacer"></div>
      <div class="flex w-full items-end justify-end">
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
    </div>
  `,
})
export class BusinessFilesFormComponent {
  // global state
  business = this.mrs.getBusiness();
  businessFilesForm: NgForm;

  // form states
  formSubmitted: boolean = false;
  isFormValid: boolean = false;

  // error states
  fileError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });

  // zod schema for validating business object
  BusinessSchema = z.object({
    files: z.array(z.string()).min(1, { message: 'Required' }),
  });

  // constructor
  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService
  ) {
    this.businessFilesForm = new NgForm([], []);
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    try {
      const validatedData = this.BusinessSchema.parse(form.value);
      // update local form data
      this.business.businessFileURLs = validatedData.files;
      // then update global state with that form data
      this.mrs.setBusiness(this.business);
      console.log('Form data:', this.business);
      this.navigateToNextPage();
    } catch (error) {
      console.log('Form is not valid');
      console.log(error);
      if (error instanceof z.ZodError) {
        this.fileError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
      }
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onSubmit(this.businessFilesForm);
  }

  navigateToNextPage() {
    this.router.navigate(['merchant/register/merchantdata']); // replace '/nextPage' with the actual route
  }

  handleFileChange(fileData: FileList) {
    // validate


  }
}

