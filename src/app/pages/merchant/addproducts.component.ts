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
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">Add Products</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph">Add a new product to your catalogue</span>
      <div id="spacer" class="h-4"></div>
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex flex-col gap-4">
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="product name"
          />
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="product type"
          />
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="product price"
          />
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="stock amount"
          />
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="product description"
          />
        </div>
        <div class="flex">
            <fileinput label="Upload Images"></fileinput>
        </div>
      </div>
      <div class="h-32" id="spacer"></div>
      <div class="flex flex-col items-end">
        <buttonwicon
          (click)="navigateToNextPage()"
          label="Save Product"
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
    this.router.navigate(['/merchant/products']); // replace '/nextPage' with the actual route
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
