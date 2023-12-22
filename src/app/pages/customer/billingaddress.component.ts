import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BillingAddressService } from '../../api/billing-address.service';
import { progressbar } from '../../components/form/progressbar.component';

@Component({
  selector: 'billing-address',
  standalone: true,
  imports: [FormsModule, HttpClientModule, progressbar],
  template: `
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <main class="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 font-sans text-softblack bg-softwhite py-10 rounded-lg shadow-2xl">
        <div class="justify-center items-center flex flex-col py-5 px-20 max-md:px-10">
          <progress-bar [labels]="['Personal Detail', 'Billing Address', 'Payment Method', 'Done']" [current]="'Billing Address'"></progress-bar>
          <br />
        </div>
        <div>
          <div class="bg-white p-6 rounded-lg">
            <h2 class="text-subtitles font-bold mb-4">Billing Address</h2>
            <form (submit)="navigateToPaymentMethod()">
              <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label for="address" class="block mb-2 text-small font-medium text-softblack">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    (input)="updateBillingAddress('address', $event)" 
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required />
                </div>
                <div>
                  <label for="city" class="block mb-2 text-small font-medium text-softblack">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    (input)="updateBillingAddress('city', $event)" 
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required />
                </div>
              </div>
              <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label for="state" class="block mb-2 text-small font-medium text-softblack">State</label>
                  <input 
                    type="text" 
                    id="state" 
                    name="state" 
                    (input)="updateBillingAddress('state', $event)" 
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required />
                </div>
                <div>
                  <label for="country" class="block mb-2 text-small font-medium text-softblack">Country</label>
                  <input 
                    type="text" 
                    id="country" 
                    name="country" 
                    (input)="updateBillingAddress('country', $event)" 
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required />
                </div>
              </div>
              <div class="mb-6">
                <label for="zip" class="block mb-2 text-small font-medium text-softblack">ZIP / Postal Code</label>
                <input 
                    type="text"
                    id="zip"
                    name="zip"
                    (input)="formatZipCode($event)" 
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required />
              </div>
              <div class="flex justify-end space-x-4">
                <button (click)="navButton1()" type="button" class="text-softblack bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                <button type="submit" class="text-white bg-softblack hover:bg-fadedgray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Next</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  `,
})
export class CustomerBillingAddressComponent {
  billingAddress = {
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  };

  isSubmitting = false;

  constructor(
    private router: Router,
    private billingAddressService: BillingAddressService
  ) {}

  navigateToPaymentMethod() {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    this.billingAddressService.createBillingAddress(this.billingAddress).subscribe(
      (response) => {
        this.router.navigate(['customer/paymentmethod/1']);
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Error when saving billing address:', error);
        this.isSubmitting = false;
      }
    );
  }

  formatZipCode(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
  
    if (value.length > 5) {
      value = value.substring(0, 5);
    }
    this.billingAddress.postalCode = value;
    input.value = value;
  }

  navButton1() {
    this.router.navigate(['previous-route']); // Sesuaikan dengan route yang diinginkan
  }

  updateBillingAddress(field: keyof CustomerBillingAddressComponent['billingAddress'], event: Event) {
    const input = event.target as HTMLInputElement;
    this.billingAddress[field] = input.value;
  }
}
