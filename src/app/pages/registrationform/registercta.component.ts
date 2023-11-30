import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'merchantregistercta',
  template: `
    <div class="h-32" id="spacer"></div>
    <div class="flex flex-row justify-between w-screen">
      <div class="w-12" id="spacer"></div>
      <div class="w-1/2 ">
        <div class="max-w-lg">
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
      <div class="w-12" id="spacer"></div>
      <div class="w-1/2">
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

@NgModule({
  declarations: [MerchantRegisterCTA],
  exports: [MerchantRegisterCTA],
  imports: [CommonModule, buttonwIconModule],
})
export class MerchantRegisterCTAModule {}
