import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantRegistrationService } from './merchantregistration.service';
import { FileInputComponent } from '../../components/form/fileinput.component';
import { ButtonwIcon } from '../../components/button.component';
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
          <div>
            <!-- <button (click)="sendFiles()" class="text-black font-black test">
              send
            </button> -->
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BusinessFilesFormComponent {
  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService
  ) {}

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    this.router.navigate(['merchant/register/merchantdata']); // replace '/nextPage' with the actual route
  }

  // handleFileChange(fileData: FileList) {
  //   this.mrs.sendFiles(fileData).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
