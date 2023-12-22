import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IconComponent } from '../../components/icon.component';
import { ButtonNoIcon } from '../../components/buttonnoicon.component';

@Component({
  selector: 'officer-merchant-application',
  standalone: true,
  imports: [IconComponent, ButtonNoIcon],
  template: `
    <div class="flex flex-col h-full">
      <div class="h-12" id="spacer"></div>
      <div class="w-full flex items-start">
        <button
          class="text-small flex flex-row items-center gap-2 hover:cursor-pointer hover:underline"
          (click)="navigateToPage('officer/applications')"
        >
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
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
