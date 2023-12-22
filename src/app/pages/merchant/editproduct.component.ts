import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonwIcon } from '../../components/button.component';
import { FileInputComponent } from '../../components/form/fileinput.component';
@Component({
  selector: 'merchant-products-add',
  standalone: true,
  imports: [ButtonwIcon, FileInputComponent],
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">Edit Product</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph">Edit a product in your catalogue</span>
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
          label="Save Edit"
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
export class MerchantEditProductsComponent {
  constructor(private router: Router) {}

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/products']); // replace '/nextPage' with the actual route
  }
}
