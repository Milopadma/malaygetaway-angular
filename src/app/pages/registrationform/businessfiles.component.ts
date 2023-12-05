import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
@Component({
  selector: 'businessfiles-form',
  template: `
    <div class="flex flex-col items-start">
      <h1
        class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
      >
        Upload your business documents
      </h1>
      <div id="spacer" class="h-4"></div>
      <div class="flex flex-row gap-4">
        <fileinput label="Licenses"></fileinput>
        <fileinput label="Testimonials"></fileinput>
      </div>
      <div class="h-32" id="spacer"></div>
      <div class="flex w-full items-end justify-end">
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
    </div>
  `,
})
export class BusinessFilesFormComponent {
  constructor(private router: Router) {}

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    this.router.navigate(['merchant/register/merchantdata']); // replace '/nextPage' with the actual route
  }
}

@NgModule({
  declarations: [BusinessFilesFormComponent],
  exports: [BusinessFilesFormComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
  ],
})
export class BusinessFilesFormComponentModule {}
