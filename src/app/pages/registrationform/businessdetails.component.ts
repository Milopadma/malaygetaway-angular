import { HostListener } from '@angular/core';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
import { ButtonwIcon } from '../../components/button.component';
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
        <!-- <div
          [class.opacity-100]="!contactNumber.valid && contactNumber.touched"
          [class.translate-y-0]="!contactNumber.valid && contactNumber.touched"
          [class.h-0]="contactNumber.valid || !contactNumber.touched"
          class="text-reject transition-all ease-in-out duration-500 opacity-0 -translate-y-3/4 block h-8"
        >
          Contact Number required.
        </div> -->
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
          [class.opacity-100]="!contactEmail.valid && contactEmail.touched"
          [class.translate-y-0]="!contactEmail.valid && contactEmail.touched"
          [class.h-0]="contactEmail.valid || !contactEmail.touched"
          class="text-reject transition-all ease-in-out duration-500 opacity-0 -translate-y-3/4 block h-8"
        >
          Contact Email required.
        </div>
        <textarea
          id="description"
          required
          [(ngModel)]="business.description"
          (ngModelChange)="onFormChange()"
          name="description"
          #name="ngModel"
          #textarea
          (input)="autoResize(textarea)"
          class="text-black placeholder:text-fadedgray  h-32 text-paragraph leading-7 tracking-tighter border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-2 px-5 py-2 border-2 border-solid max-md:pl-1 resize-y"
          placeholder="brief company description"
          rows="1"
        ></textarea>
        <div class="h-32" id="spacer"></div>
        <div class="flex flex-col items-end">
          <buttonwicon
            (click)="navigateToNextPage()"
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
export class BusinessDetailsFormComponent {
  // init new business from global state
  business = this.mrs.getBusiness();

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.overflow = 'auto';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService
  ) {}

  onFormChange() {
    this.mrs.setBusiness(this.business);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.business = form.value;
      this.mrs.setBusiness(this.business);
      console.log('Form data:', this.business);
      this.navigateToNextPage();
    } else {
      console.log('Form is not valid');
    }
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/documents']);
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }
}
