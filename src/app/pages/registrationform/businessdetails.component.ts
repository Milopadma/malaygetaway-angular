import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
@Component({
  selector: 'businessdetails-form',
  template: `
    <form #merchantDataForm="ngForm" (ngSubmit)="onSubmit(merchantDataForm)">
      <div class="flex flex-col">
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
          #contactNumber="ngModel"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="contact number"
        />
        <!-- errors -->
        <div
          [hidden]="contactNumber.valid || contactNumber.pristine"
          class="text-reject"
        >
          Contact Number required.
        </div>
        <input
          type="email"
          id="contactEmail"
          required
          [(ngModel)]="business.contactEmail"
          (ngModelChange)="onFormChange()"
          name="contactEmail"
          #contactEmail="ngModel"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
          placeholder="contact email"
        />
        <!-- errors -->
        <div
          [hidden]="contactEmail.valid || contactEmail.pristine"
          class="text-reject"
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
          class="text-black placeholder:text-fadedgray  h-32 text-paragraph leading-7 tracking-tighter border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1 resize-y"
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

@NgModule({
  declarations: [BusinessDetailsFormComponent],
  exports: [BusinessDetailsFormComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FormsModule,
  ],
})
export class BusinessDetailsFormComponentModule {}
