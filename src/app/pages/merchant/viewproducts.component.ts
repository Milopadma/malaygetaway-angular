import { Component, OnInit } from '@angular/core';
import { ButtonUnbordered } from '../../components/buttonunbordered.component';
import { Router } from '@angular/router';
import { ButtonBordered } from '../../components/buttonbordered.component';
import { IconComponent } from '../../components/icon.component';
import { ApiService } from '../../api/api.service';
import { Product } from '../../types';

@Component({
  selector: 'merchant-products-list',
  standalone: true,
  imports: [ButtonUnbordered, ButtonBordered, IconComponent],
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
        @for (product of products; track product.productId){
        <div
          class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6 justify-between"
        >
          <div class="flex flex-row">
            <div>
              <img src="{{ product.productImageURLs }}" class="w-24 h-24" />
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
              (click)="
                navigateToPage('merchant/editproduct/' + product.productId)
              "
              class="text-small text-softblack hover:underline"
            >
              Edit
            </button>
            <button class="text-reject hover:underline">Delete</button>
          </div>
        </div>
        }
      </div>
    </div>
  `,
})
export class MerchantViewProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    const merchantId = 420949; // Replace this with the actual merchant ID
    this.apiService.getProducts(merchantId).subscribe(
      (res) => {
        this.products = res.data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
