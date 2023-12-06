import { HostListener, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MerchantRegistrationService } from './merchantregistration.service';
@Component({
  selector: 'businessname-form',
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
        <!-- error state -->
        <div [hidden]="name.valid || name.pristine" class="text-reject">
          Name is required.
        </div>
        <div class="h-32" id="spacer"></div>
        <div class="flex flex-col items-end" type="submit">
          <buttonwicon label="Continue"></buttonwicon>
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
  business = this.mrs.getBusiness();
  merchantDataForm: NgForm;

  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService
  ) {
    // init new business from global state
    this.merchantDataForm = new NgForm([], []);
  }

  // update global state on form change
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

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onSubmit(this.merchantDataForm);
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/details']); // replace '/nextPage' with the actual route
  }
}

@NgModule({
  declarations: [BusinessNameFormComponent],
  exports: [BusinessNameFormComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FormsModule,
  ],
})
export class BusinessNameFormComponentModule {}
