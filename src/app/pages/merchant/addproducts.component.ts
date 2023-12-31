import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponent } from '../../components/form/fileinput.component';
import { ButtonwIcon } from '../../components/button.component';
import { ApiService } from '../../api/api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { z } from 'zod';
import { FileUploadResponse, FormError, Product } from '../../types';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'merchant-products-add',
  standalone: true,
  imports: [FileInputComponent, ButtonwIcon, FormsModule],
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <form #AddProductForm="ngForm" (ngSubmit)="onSubmit(AddProductForm)">
        <h1 class="text-titles">Add Products</h1>
        <div class="h-4" id="spacer"></div>
        <span class="text-paragraph">Add a new product to your catalogue</span>
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
              (ngModelChange)="onProductTypeChange($event)"
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
              type="text"
              id="productAddress"
              required
              [(ngModel)]="product.address"
              (ngModelChange)="onProductAddressChange($event)"
              name="address"
              #productAddress="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
              placeholder="product address"
            />
            <!-- errors -->
            <div
              class="{{
                !productAddressError().isHidden && productAddress.touched
                  ? 'opacity-100 translate-y-0 h-8'
                  : 'opacity-0 -translate-y-3/4 h-0'
              }} text-reject transition-all ease-in-out duration-500 block"
            >
              {{ productAddressError().message }}
            </div>
            <input
              type="number"
              id="productPrice"
              required
              [(ngModel)]="product.price"
              (ngModelChange)="onProductPriceChange($event)"
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
              placeholder="brief product description"
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
          <!-- <div class="flex">
            @if (isLoading) {
            <div class="flex justify-center items-center gap-4">
              <div
                class="animate-spin rounded-full h-4 w-4 border-b-2 border-zinc-800"
              ></div>
              <div class="text-softgray text-base animate-pulse">
                Uploading your files...
              </div>
            </div>
            } @else {
            <fileinput
              label="Upload Images"
              (fileChanged)="fileChangeSubject.next($event)"
              (fileChanged)="handleFileChange($event)"
            ></fileinput>
            }
          </div> -->
        </div>
        <div class="h-32" id="spacer"></div>
        <div
          class="flex flex-col items-end"
          type="submit"
          [ariaDisabled]="!isFormValid"
        >
          <buttonwicon label="Continue" [disabled]="!isFormValid"></buttonwicon>
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
export class MerchantAddProductsComponent {
  // init new business from global state
  product = {
    productId: Math.floor(Math.random() * 1000),
    address: '',
    name: '',
    description: '',
    price: 0,
    type: '',
    productImageURLs: [
      'https://via.placeholder.com/600x600',
      'https://via.placeholder.com/600x600',
    ],
    merchantId: Number(localStorage.getItem('userId') || 1),
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
  productAddressError = signal<FormError>({
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
    name: z.string().min(2, 'Name must be at least 2 characters'),
    description: z.string().min(2, 'Description must be at least 2 characters'),
    address: z.string().min(2, 'Address must be at least 2 characters'),
    price: z.number().min(1, 'Invalid Price'),
    type: z.string().min(2, 'Type must be at least 2 characters'),
    // productImageURLs: z.array(z.string()).min(1, 'Must have at least 1 image'),
  });

  // form states
  formSubmitted: boolean = false;
  isFormValid: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.AddProductForm = new NgForm([], []);
    // Check contactnumber availability with debounce
  }

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.overflow = 'auto';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  // the subjects for each field
  productNameSubject = new Subject<string>();
  productTypeSubject = new Subject<string>();
  productAddressSubject = new Subject<string>();
  productPriceSubject = new Subject<number>();
  productDescriptionSubject = new Subject<string>();

  onProductNameChange(value: string) {
    console.log(value);
    this.product.name = value;
    this.validateField('name', value);
    this.checkIfFormIsValid();
  }

  onProductTypeChange(value: string) {
    console.log(value);
    this.product.type = value;
    this.validateField('type', value);
    this.checkIfFormIsValid();
  }

  onProductAddressChange(value: string) {
    console.log(value);
    this.product.address = value;
    this.validateField('address', value);
    this.checkIfFormIsValid();
  }

  onProductPriceChange(value: number) {
    console.log(value);
    this.product.price = value;
    this.validateField('price', value);
    this.checkIfFormIsValid();
  }

  onProductDescriptionChange(value: string) {
    console.log(value);
    this.product.description = value;
    this.validateField('description', value);
    this.checkIfFormIsValid();
  }

  checkIfFormIsValid() {
    try {
      this.ProductSchema.parse(this.product);
      this.isFormValid = true;
    } catch (error) {
      this.isFormValid = false;
    }
  }

  validateField(fieldName: string, value: any) {
    try {
      // Validate the field individually
      (this.ProductSchema.shape as Record<string, any>)[fieldName].parse(value);
      // If the field is valid, reset its error
      this.resetError(fieldName);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // If the field is not valid, set its error
        this.setError(fieldName, error.errors[0].message);
      }
    }
  }

  resetError(fieldName: string) {
    switch (fieldName) {
      case 'name':
        this.productNameError.set({ message: 'Required', isHidden: true });
        break;
      case 'address':
        this.productAddressError.set({ message: 'Required', isHidden: true });
        break;
      case 'type':
        this.productTypeError.set({ message: 'Required', isHidden: true });
        break;
      case 'price':
        this.productPriceError.set({ message: 'Required', isHidden: true });
        break;
      case 'description':
        this.productDescriptionError.set({
          message: 'Required',
          isHidden: true,
        });
        break;
    }
  }

  setError(fieldName: string, message: string) {
    switch (fieldName) {
      case 'name':
        this.productNameError.set({ message: message, isHidden: false });
        break;
      case 'type':
        this.productTypeError.set({ message: message, isHidden: false });
        break;
      case 'address':
        this.productAddressError.set({ message: message, isHidden: false });
        break;
      case 'price':
        this.productPriceError.set({ message: message, isHidden: false });
        break;
      case 'description':
        this.productDescriptionError.set({ message: message, isHidden: false });
        break;
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    try {
      console.log(form.value);

      // Manually add the missing fields to form.value
      form.value.productId = this.product.productId;
      form.value.productImageURLs = this.product.productImageURLs;
      form.value.merchantId = this.product.merchantId;

      this.apiService.addProduct(this.product).subscribe((res) => {
        console.log(res);
        this.toastr.success('Product added successfully');
      });
      this.navigateToNextPage();
    } catch (error) {
      console.log('Form is not valid');
      console.log(error);
      this.toastr.error('Form was not valid, server side error.');
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
