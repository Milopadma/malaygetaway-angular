import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
import { HugeButtonModule } from '../../components/huge-button.component';
@Component({
  selector: 'merchant-home',
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">Home</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph"> Welcome, Merchant </span>
      <div class="h-4" id="spacer"></div>
      <!-- huge buttons -->
      <div class="flex flex-row w-full">
        <huge-button
          label="View Products"
          (click)="navigateToPage('merchant/products')"
        ></huge-button>
        <div class="w-12" id="spacer"></div>
        <huge-button
          label="View Reports"
          (click)="navigateToPage('merchant/reports')"
        ></huge-button>
      </div>
    </div>
  `,
})
export class MerchantHomeComponent {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}

@NgModule({
  declarations: [MerchantHomeComponent],
  exports: [MerchantHomeComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    HugeButtonModule,
  ],
})
export class MerchantHomeComponentModule {}
