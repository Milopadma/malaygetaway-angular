import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { progressbar } from '../../components/form/progressbar.component';

@Component({
  selector: 'purchase-success',
  standalone: true,
  imports: [progressbar],
  template: `
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <main
        class="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 font-sans bg-green-50 py-10 rounded-lg shadow-2xl"
      >
        <div class="flex justify-center items-center flex-col py-5">
          <progress-bar
            [labels]="[
              'Personal Detail',
              'Billing Address',
              'Payment Method',
              'Done'
            ]"
            [current]="'Done'"
          ></progress-bar>
          <div class="mt-10">
            <div
              class="text-center bg-green-100 p-20 rounded-lg border border-green-500"
            >
              <div class="flex justify-center items-center mb-2">
                <img
                  src="https://www.pinclipart.com/picdir/big/523-5232109_check-mark-computer-icons-clip-art-green-checkmark.png"
                  alt="Credit Card"
                  class="h-20"
                />
              </div>
              <br />
              <br />
              <h2 class="text-4xl font-bold mb-2 text-green-800">
                PAYMENT SUCCESSFUL
              </h2>
              <p class="text-xl text-green-700">
                Your payment has been processed successfully
              </p>
              <br />
              <br />
              <div class="mt-6 flex justify-center">
                <button
                  (click)="navButton1()"
                  class="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-3 px-20 rounded"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  `,
})
export class CustomerSuccessfulyPurchase {
  constructor(private router: Router) {}
  navButton1() {
    this.router.navigate(['customer/home']);
  }
}
