import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../components/form/progressbar.component';

@Component({
  selector: 'purchase4',
  standalone: true,
  imports: [ProgressBarComponent, CommonModule],
  template: `
    <section>
      <br /><br /><br /><br /><br />
      <main class="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 font-sans text-softblack bg-softwhite py-10 rounded-lg shadow-2xl">
        <div class="justify-center items-center flex flex-col py-5 px-20 max-md:px-10">
          <progress-bar [labels]="['Personal Detail', 'Billing Address', 'Payment Method', 'Done']" [current]="'Payment Method'"></progress-bar>
          <br />
          <div class="flex flex-col"></div>
        </div>
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-subtitles font-bold mb-4">Payment Method</h2>
          <p class="text-small text-softblack mb-6">Choose PayPal as the Payment Method</p>
          <div class="flex justify-center gap-4 mb-6">
          <button class="group py-1 px-10 font-bold rounded-lg flex flex-col items-center text-softblack" disabled>
            <div class="w-full h-12 mb-2 flex justify-center items-center">
              <img src="https://logos-world.net/wp-content/uploads/2020/05/PayPal-Logo.png" alt="PayPal" class="h-20" />
            </div>
          </button>
          </div>
          <form *ngIf="selectedMethod === 'paypal'" class="flex flex-col gap-4">
            <div class="text-center mt-1">
              <p class="mb-4 text-small">Enter your PayPal details:</p>
              <div>
                <label for="paypalEmail" class="block mb-2 text-small font-medium text-softblack">PayPal Email</label>
                <input type="text" id="paypalEmail" placeholder="email@example.com" name="paypalEmail" class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <br />
              <button (click)="navButton3()" class="text-white bg-softblack hover:bg-fadedgray focus:ring-4 focus:outline-none focus:ring-blue-300 mb-2 font-medium rounded-lg text-small px-8 py-2.5 text-center">
                Proceed with PayPal
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  `,
})
export class CustomerPaymentMethodComponent {
  selectedMethod: string = 'paypal';
  currentStep: string = 'Payment Method';

  selectMethod(method: string): void {
    this.selectedMethod = method;
  }

  constructor(private router: Router) {}

  navButton3() {
    this.router.navigate(['successfuly/:id']);
  }
}