import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { buttonwIconModule } from '../../components/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'purchase2',
  template: `
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <main
        class="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 font-sans text-softblack bg-softwhite py-10 rounded-lg shadow-2xl"
      >
        <div
          class="justify-center items-center flex flex-col py-5 px-20 max-md:px-10"
        >
          <progress-bar
            [labels]="[
              'Personal Detail',
              'Billing Address',
              'Payment Method',
              'Done'
            ]"
            [current]="'Personal Detail'"
          ></progress-bar>
          <br />
          <div class="flex flex-col"></div>
        </div>
        <div>
          <div class="bg-white p-6 rounded-lg">
            <h2 class="text-subtitles font-bold mb-4">Personal Detail</h2>
            <form action="#" method="POST">
              <div class="grid gap-6 mb-1 lg:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-small font-medium text-softblack"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-1 text-small font-medium text-softblack"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div class="mb-1">
                <label
                  for="address"
                  class="block mb-1 text-small font-medium text-softblack"
                  >Address</label
                >
                <input
                  type="text"
                  id="address"
                  name="address"
                  class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div class="grid gap-6 mb-1 lg:grid-cols-2">
                <div>
                  <label
                    for="city"
                    class="block mb-2 text-small font-medium text-softblack"
                    >City</label
                  >
                  <input
                    type="text"
                    id="city"
                    name="city"
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    for="state"
                    class="block mb-2 text-small font-medium text-softblack"
                    >State</label
                  >
                  <input
                    type="text"
                    id="state"
                    name="state"
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div class="grid gap-6 mb-5 lg:grid-cols-2">
                <div>
                  <label
                    for="country"
                    class="block mb-2 text-small font-medium text-softblack"
                    >Country</label
                  >
                  <input
                    type="text"
                    id="country"
                    name="country"
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    for="zip"
                    class="block mb-2 text-small font-medium text-softblack"
                    >ZIP / Postal Code</label
                  >
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    (input)="formatZipCode($event)"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end space-x-4">
                <button
                  (click)="navButton1()"
                  type="button"
                  class="text-softblack bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Cancel
                </button>
                <button
                  (click)="navigateToBillingAddress()"
                  type="submit"
                  class="text-white bg-softblack hover:bg-fadedgray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  `,
})
export class CustomerPersonalDetailComponent {
  constructor(private router: Router) {}
  navButton1() {
    this.router.navigate(['product/:id']);
  }
  navigateToBillingAddress() {
    this.router.navigate(['customer/billingaddress/1']);
  }
  formatZipCode(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.substring(0, 5);
    }
    event.target.value = value;
  }
}

@NgModule({
  declarations: [CustomerPersonalDetailComponent],
  exports: [CustomerPersonalDetailComponent],
  imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule],
})
export class CustomerPersonalDetailModule {}
