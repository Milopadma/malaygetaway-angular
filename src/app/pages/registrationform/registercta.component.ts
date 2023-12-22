import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ButtonwIcon } from '../../components/button.component';

@Component({
  selector: 'merchantregistercta',
  standalone: true,
  imports: [ButtonwIcon],
  template: `
    <div class="h-32" id="spacer"></div>
    <div class="flex flex-row justify-between w-screen">
      <div class="w-24" id="spacer"></div>
      <div>
        <div class="flex flex-grow flex-col w-full">
          <div class="text-titles">
            Register <br />
            as merchant
          </div>
          <div class="h-4" id="spacer"></div>
          <div class="text-subtitles">
            Start listing your businesses with <br />
            us
          </div>
        </div>
        <div class="h-12" id="spacer"></div>
        <div class="max-w-xs">
          <buttonwicon
            (click)="navigateToNextPage()"
            label="Start"
          ></buttonwicon>
        </div>
      </div>
      <div class="w-1/3">
        <div class="bg-blue-500 w-24 h-48 absolute"></div>
        <div class="bg-blue-300 w-24 h-48 absolute ml-6 mt-4"></div>
      </div>
    </div>
  `,
})
export class MerchantRegisterCTA {
  constructor(private router: Router) {}

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/name']); // replace '/nextPage' with the actual route
  }
}
