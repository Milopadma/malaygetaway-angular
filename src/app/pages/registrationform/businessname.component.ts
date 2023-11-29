import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'businessname-form',
  template: `
    <div class="flex flex-col">
      <h1
        class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
      >
        What is your business <br />
        name?
      </h1>
      <input
        type="text"
        class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
        placeholder="business name"
        />
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
  `,
})
export class BusinessNameFormComponent {
  constructor(private router: Router) {}

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    // TODO! need to check if user is currently in an input field
    this.navigateToNextPage();
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
  ],
})
export class BusinessNameFormComponentModule {}
