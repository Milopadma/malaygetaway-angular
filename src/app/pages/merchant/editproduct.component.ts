import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FileInputComponent } from '../../components/form/fileinput.component';
import { ButtonwIcon } from '../../components/button.component';
import { ApiService } from '../../api/api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { z } from 'zod';
import { FileUploadResponse, FormError, Product } from '../../types';
import { Subject } from 'rxjs';
@Component({
  selector: 'merchant-products-add',
  standalone: true,
  imports: [FileInputComponent, ButtonwIcon, FormsModule],
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <form #AddProductForm="ngForm" (ngSubmit)="onSubmit(AddProductForm)">
        <h1 class="text-titles">Edit Product</h1>
        <div class="h-4" id="spacer"></div>
        <span class="text-paragraph"
          >Edit an existing product in your catalogue</span
        >
        <div id="spacer" class="h-4"></div>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col gap-4">
            <input
              type="text"
              id="productName"
              required
              [(ngModel)]="product.name"
              (ngModelChange)="onProductNameChange($event)"
              name="name"
              #productName="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
              placeholder="product name"
            />
            <!-- errors -->
            <div
              class="{{
                !productNameError().isHidden && productName.touched
                  ? 'opacity-100 translate-y-0 h-8'
                  : 'opacity-0 -translate-y-3/4 h-0'
              }} text-reject transition-all ease-in-out duration-500 block"
            >
              {{ productNameError().message }}
            </div>
            <input
              type="text"
              id="productType"
              required
              [(ngModel)]="product.type"
              (ngModelChange)="onProductNameChange($event)"
              name="type"
              #productType="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
              placeholder="product type"
            />
            <!-- errors -->
            <div
              class="{{
                !productTypeError().isHidden && productType.touched
                  ? 'opacity-100 translate-y-0 h-8'
                  : 'opacity-0 -translate-y-3/4 h-0'
              }} text-reject transition-all ease-in-out duration-500 block"
            >
              {{ productTypeError().message }}
            </div>
            <input
              type="number"
              id="productPrice"
              required
              [(ngModel)]="product.price"
              (ngModelChange)="onProductNameChange($event)"
              name="price"
              #productPrice="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
              placeholder="product price"
            />
            <!-- errors -->
            <div
              class="{{
                !productPriceError().isHidden && productPrice.touched
                  ? 'opacity-100 translate-y-0 h-8'
                  : 'opacity-0 -translate-y-3/4 h-0'
              }} text-reject transition-all ease-in-out duration-500 block"
            >
              {{ productPriceError().message }}
            </div>
            <textarea
              id="description"
              required
              [(ngModel)]="product.description"
              (ngModelChange)="onProductDescriptionChange($event)"
              name="description"
              #name="ngModel"
              #textarea
              #productDescription="ngModel"
              (input)="autoResize(textarea)"
              class="text-black placeholder:text-fadedgray  h-32 text-paragraph leading-7 tracking-tighter border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-2 px-5 py-2 border-2 border-solid max-md:pl-1 resize-y"
              placeholder="brief company description"
              rows="1"
            ></textarea>
            <!-- errors -->
            <div
              class="{{
                !productDescriptionError().isHidden &&
                productDescription.touched
                  ? 'opacity-100 translate-y-0 h-8'
                  : 'opacity-0 -translate-y-3/4 h-0'
              }} text-reject transition-all ease-in-out duration-500 block"
            >
              {{ productDescriptionError().message }}
            </div>
          </div>
        </div>
        <div class="h-32" id="spacer"></div>
        <div
          class="flex flex-col items-end"
          type="submit"
          [ariaDisabled]="!isFormValid"
        >
          <buttonwicon
            label="Save Edits"
            [disabled]="!isFormValid"
          ></buttonwicon>
          <p
            class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
          >
            or press Enter
          </p>
        </div>
      </form>
    </div>
  `,
})
export class MerchantEditProductComponent implements OnInit {
  onProductDescriptionChange($event: any) {
    throw new Error('Method not implemented.');
  }
  onProductNameChange($event: any) {
    throw new Error('Method not implemented.');
  }
  // init new business from global state
  product = {
    productId: Math.floor(Math.random() * 1000),
    name: '',
    description: '',
    price: 0,
    type: '',
    productImageURLs: [
      'https://via.placeholder.com/600x600',
      'https://via.placeholder.com/600x600',
    ],
    merchantId: 420949,
  } as Product;

  AddProductForm: NgForm;

  // for the errors
  productNameError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });
  productTypeError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });
  productPriceError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });
  productDescriptionError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });

  // Schema
  ProductSchema = z.object({
    productId: z.number().min(1, 'Invalid Product Id'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    description: z.string().min(2, 'Description must be at least 2 characters'),
    price: z.number().min(1, 'Invalid Price'),
    type: z.string().min(2, 'Type must be at least 2 characters'),
    productImageURLs: z.array(z.string()).min(1, 'Must have at least 1 image'),
    merchantId: z.number().min(1, 'Invalid Merchant Id'),
  });

  // form states
  formSubmitted: boolean = false;
  isFormValid: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.AddProductForm = new NgForm([], []);
    // Check contactnumber availability with debounce
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      console.log(productId);
      this.apiService.getSingleProduct(productId).subscribe((response) => {
        console.log(response);
        this.product = response.data;

        console.log(this.product);
      });
    });
  }
  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.overflow = 'auto';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    try {
      console.log(form.value);

      // Manually add the missing fields to form.value
      form.value.productId = this.product.productId;
      form.value.productImageURLs = this.product.productImageURLs;
      form.value.merchantId = this.product.merchantId;

      this.product = this.ProductSchema.parse(form.value);
      this.apiService.updateProduct(this.product).subscribe((res) => {
        console.log(res);
      });
      this.navigateToNextPage();
    } catch (error) {
      console.log('Form is not valid');
      console.log(error);
      if (error instanceof z.ZodError) {
        console.log('Form onSubmit Err!: ', error.errors[0].message);
      }
    }
  }

  navigateToNextPage() {
    this.router.navigate(['/merchant/products']);
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onSubmit(this.AddProductForm);
  }
}
