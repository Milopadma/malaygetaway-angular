import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
import { ButtonUnborderedModule } from '../../components/buttonunbordered.component';
import { ButtonNoIconModule } from '../../components/buttonnoicon.component';
import { IconComponentModule } from '../../components/icon.component';
@Component({
  selector: 'officer-merchant-application',
  template: `
    <div class="flex flex-col h-full">
      <div class="h-12" id="spacer"></div>
      <div class="w-full flex items-start">
        <button class="text-small underline flex flex-row items-center gap-2">
          <icon iconName="LeftArrow" />Back
        </button>
      </div>
      <div class="h-6" id="spacer"></div>
      <span class="text-small">Review submitted applications</span>
      <div class="h-6" id="spacer"></div>
      <div class="flex flex-row grow">
        <div class="flex flex-col w-1/2 h-2/3 justify-between">
          <div class="flex flex-col">
            <h1 class="text-titles">Acme</h1>
            <div class="h-4" id="spacer"></div>
            <span class="text-paragraph"
              >We are a company that focuses on this and that.</span
            >
          </div>
          <div>
            <div class="h-6" id="spacer"></div>
            <div class="flex flex-row justify-between px-4">
              <buttonnoicon label="Reject"></buttonnoicon>
              <div class="w-4" id="spacer"></div>
              <buttonnoicon label="Approve"></buttonnoicon>
            </div>
          </div>
        </div>
        <div class="flex w-1/2">
          <!-- gray box -->
          <div class="h-2/3 w-full bg-softgray block">picture</div>
        </div>
      </div>
    </div>
  `,
})
export class OfficerMerchantApplicationsComponent {
    // take the url as input
    // call api

}

@NgModule({
  declarations: [OfficerMerchantApplicationsComponent],
  exports: [OfficerMerchantApplicationsComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    ButtonUnborderedModule,
    ButtonNoIconModule,
    IconComponentModule,
  ],
})
export class OfficerMerchantApplicationsComponentModule {}
