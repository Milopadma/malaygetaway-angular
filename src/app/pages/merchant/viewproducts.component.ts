import { Component, OnInit } from '@angular/core';
import { ButtonUnbordered } from '../../components/buttonunbordered.component';
import { Router } from '@angular/router';
import { ButtonBordered } from '../../components/buttonbordered.component';
import { IconComponent } from '../../components/icon.component';
import { ApiService } from '../../api/api.service';
import { Product } from '../../types';
import { DialogueBoxComponent } from '../../components/dialoguebox.component';

@Component({
  selector: 'merchant-products-list',
  standalone: true,
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
        @if (products.length == 0) {
        <div class="text-paragraph text-reject flex pt-8">
          You have no products in your catalogue!
        </div>
        } @else { @for (product of products; track product.productId){
        <div
          class="flex flex-row border-t-2 border-fadedgray pt-4 pb-6 justify-between"
        >
          <div class="flex flex-row">
            <div>
              <img src="{{ product.productImageURLs[0] }}" class="w-24 h-24" />
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
            <button
              class="text-reject hover:underline"
              (click)="handleDelete(product.productId)"
            >
              Delete
            </button>
          </div>
        </div>
        } }
      </div>
    </div>
    @if (showDialog){
    <dialogue-box
      header="Info"
      content="Are you sure you want to delete this product?"
      button1="Permanently Delete"
      button2="Cancel"
      (close)="closeDialog()"
      (firstButtonClicked)="showDialog = false; deleteProduct(productToDelete)"
      (secondButtonClicked)="showDialog = false"
    ></dialogue-box>
    }
  `,
  imports: [
    ButtonUnbordered,
    ButtonBordered,
    IconComponent,
    DialogueBoxComponent,
  ],
})
export class MerchantViewProductsComponent implements OnInit {
  products: Product[] = [];
  showDialog = false;
  productToDelete!: number;
  constructor(private router: Router, private apiService: ApiService) {}
  handleDelete(productId: number) {
    this.showDialog = true;
    this.productToDelete = productId;
  }
  closeDialog() {
    this.showDialog = false;
  }

  ngOnInit() {
    const merchantId = Number(localStorage.getItem('userId') || 0);
    this.apiService.getProducts(merchantId).subscribe(
      (res) => {
        this.products = res.data;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  deleteProduct(productId: number) {
    this.apiService.deleteProduct(productId).subscribe(
      (res) => {
        console.log(res);
        location.reload();
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
