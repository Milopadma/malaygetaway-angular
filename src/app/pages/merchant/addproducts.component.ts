import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
@Component({
  selector: 'merchant-products-add',
  template: `
    <div id="spacer" class="h-64"></div>
    <div class="flex flex-col">
      <h1 class="text-zinc-800 text-subtitles leading-10 tracking-tighter">
        Upload your business documents
      </h1>
      <div id="spacer" class="h-4"></div>
      <div class="flex flex-col md:flex-row gap-6">
        <fileinput label="Licenses"></fileinput>
        <fileinput label="Testimonials"></fileinput>
      </div>
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
export class MerchantAddProductsComponent {
  constructor(private router: Router) {}

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/register/complete']); // replace '/nextPage' with the actual route
  }
}

@NgModule({
  declarations: [MerchantAddProductsComponent],
  exports: [MerchantAddProductsComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
  ],
})
export class MerchantAddProductsComponentModule {}
