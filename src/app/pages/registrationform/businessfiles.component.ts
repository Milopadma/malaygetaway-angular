import { Component, HostListener, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantRegistrationService } from './merchantregistration.service';
import { FileInputComponent } from '../../components/form/fileinput.component';
import { ButtonwIcon } from '../../components/button.component';
import { z } from 'zod';
import { NgForm } from '@angular/forms';
import { FileUploadResponse, FormError } from '../../types';
import { ApiService } from '../../api/api.service';
import { Subject, debounceTime } from 'rxjs';
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
          (fileChanged)="fileChangeSubject.next($event)"
          (fileChanged)="handleFileChange($event)"
          label="Licenses"
        ></fileinput>

        <fileinput
          (fileChanged)="fileChangeSubject.next($event)"
          (fileChanged)="handleFileChange($event)"
          label="Testimonials"
        ></fileinput>
      </div>
      <!-- errors -->
      <div
        class="{{
          !fileError().isHidden
            ? 'opacity-100 translate-y-0 h-8'
            : 'opacity-0 -translate-y-3/4 h-0'
        }} text-reject transition-all ease-in-out duration-500 block"
      >
        {{ fileError().message }}
      </div>
      <div class="h-32" id="spacer"></div>
      <div class="flex w-full items-end justify-end">
        <div class="flex flex-col items-end" type="submit">
          @if (isLoading) {
          <div class="flex justify-center items-center gap-4">
            <div
              class="animate-spin rounded-full h-4 w-4 border-b-2 border-zinc-800"
            ></div>
            <div class="text-softgray text-base animate-pulse">
              Uploading your files...
            </div>
          </div>
          } @else {
          <buttonwicon
            label="Continue"
            [disabled]="!isFormValid || isLoading"
            (click)="onSubmit()"
          ></buttonwicon>
          <p
            class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
          >
            or press Enter
          </p>
          }
        </div>
      </div>
    </div>
  `,
})
export class BusinessFilesFormComponent {
  // global state
  business = this.mrs.getMerchant();

  // form states
  formSubmitted: boolean = false;
  isFormValid: boolean = false;
  formFiles: File[] = [];

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
    private mrs: MerchantRegistrationService,
    private apiService: ApiService
  ) {
    this.formFiles = [];

    this.fileChangeSubject.pipe(debounceTime(5000)).subscribe((file) => {
      this.handleFileChange(file);
    });
  }

  // local state
  fileChangeSubject = new Subject<File>();
  isLoading: boolean = false;

  onSubmit() {
    this.formSubmitted = true;
    try {
      const validatedData = this.BusinessSchema.parse(this.business);
      // update local form data
      this.business.businessFileURLs = validatedData.files;
      // then update global state with that form data
      this.mrs.setMerchant(this.business);
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
    this.onSubmit();
  }

  navigateToNextPage() {
    this.router.navigate(['merchant/register/merchantdata']); // replace '/nextPage' with the actual route
  }

  handleFileChange(file: File) {
    console.log(file);
    // Check if a file was added or replaced
    if (this.formFiles.length < 2) {
      // Add the file to the formFiles array
      this.formFiles.push(file);
    } else {
      // Replace the second file in the formFiles array
      this.formFiles[1] = file;
    }

    // Update isFormValid based on the number of files
    this.isFormValid = this.formFiles.length === 2;

    console.log('added file', this.formFiles);

    // Check if the form is still not valid
    if (!this.isFormValid) {
      this.fileError.set({
        message: 'Required',
        isHidden: false,
      });
    } else {
      this.fileError.set({
        message: '',
        isHidden: true,
      });
      this.isLoading = true;
      this.apiService.uploadMultipleFiles(this.formFiles).subscribe(
        (response: FileUploadResponse) => {
          console.log('File is uploaded', response);
          // urls
          for (let i = 0; i < response.data.length; i++) {
            this.business.businessFileURLs.push(response.data[i].data.url);
          }
          this.isLoading = false;
          this.isFormValid = true;
        },
        (error) => {
          console.log('Error', error);
          this.isLoading = false;
        }
      );
    }
  }
}
