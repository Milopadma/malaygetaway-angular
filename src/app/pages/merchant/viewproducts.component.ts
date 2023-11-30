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
import { ButtonBorderedModule } from '../../components/buttonbordered.component';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  merchant: string;
  type: string;
};

@Component({
  selector: 'merchant-products-list',
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">View Products</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph">Manage the products in your catalogue</span>
      <div class="h-4" id="spacer"></div>
      <div class="flex flex-row justify-between">
        <buttonbordered label="Filter By"
          ><icon iconName="ChevronDown"></icon
        ></buttonbordered>
        <buttonbordered
          label="Add"
          (click)="navigateToPage('merchant/addproduct')"
          ><icon iconName="Plus"></icon
        ></buttonbordered>
      </div>
      <div class="flex flex-col">
        <div class="h-4" id="spacer"></div>
        <!--  -->
        @for (product of products; track product.id){
        <div
          class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6 justify-between"
        >
          <div class="flex flex-row">
            <div>
              <img src="{{ product.image }}" class="w-24 h-24" />
            </div>
            <div class="w-12" id="spacer"></div>
            <div class="flex flex-col">
              <div class="text-subtitles text-softblack">
                {{ product.name }}
              </div>
              <div class="flex flex-row gap-4">
                <div class="text-small text-softgray">
                  RM {{ product.price }}
                </div>
                <div class="text-small text-softgray">
                  {{ product.quantity }} pcs
                </div>
                <div class="text-small text-softgray">{{ product.type }}</div>
              </div>
              <div class="h-4" id="spacer"></div>
              <div class="text-small text-softblack">
                {{ product.description }}
              </div>
            </div>
          </div>
          <div class="flex flex-row gap-4">
            <button
              (click)="navigateToPage('merchant/editproduct/' + product.id)"
              class="text-small text-softblack hover:underline"
            >
              Edit
            </button>
            <button class="text-reject hover:underline">
              Delete
            </button>
          </div>
        </div>
        }
      </div>
    </div>
  `,
})
export class MerchantViewProductsComponent {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  // placeholder data
  products: Product[] = [
    {
      id: 1,
      name: 'Acme Product',
      description: 'Product Description',
      image: 'https://via.placeholder.com/165x165',
      price: 100,
      quantity: 100,
      merchant: 'Merchant Name',
      type: 'Service',
    },
    {
      id: 2,
      name: 'Acme Product',
      description: 'Product Description',
      image: 'https://via.placeholder.com/165x165',
      price: 100,
      quantity: 100,
      merchant: 'Merchant Name',
      type: 'Item',
    },
    {
      id: 3,
      name: 'Acme Product',
      description: 'Product Description',
      image: 'https://via.placeholder.com/165x165',
      price: 100,
      quantity: 100,
      merchant: 'Merchant Name',
      type: 'Item',
    },
    {
      id: 4,
      name: 'Acme Product',
      description: 'Product Description',
      image: 'https://via.placeholder.com/165x165',
      price: 100,
      quantity: 100,
      merchant: 'Merchant Name',
      type: 'Service',
    },
  ] as Product[];
}

@NgModule({
  declarations: [MerchantViewProductsComponent],
  exports: [MerchantViewProductsComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    ButtonUnborderedModule,
    ButtonNoIconModule,
    IconComponentModule,
    ButtonBorderedModule,
  ],
})
export class MerchantViewProductsComponentModule {}
