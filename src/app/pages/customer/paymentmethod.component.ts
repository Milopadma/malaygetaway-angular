import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ProductService } from '../../api/product-price.service';
import { HttpClientModule } from '@angular/common/http';

declare var paypal: any;
@Component({
  selector: 'purchase4',
  standalone: true,

  imports: [progressbar, CommonModule, HttpClientModule],

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
          <p class="text-small text-softblack mb-10">Choose PayPal as the Payment Method</p>
          <div class="w-full h-12 mb-10 flex justify-center items-center">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/PayPal_Logo_2007.png" alt="PayPal" class="h-20" />
          </div>
          <div class="flex justify-center gap-4 mb-6">
            <div id="paypal-button-container"></div>
          </div>

        </div>
      </main>
    </section>
  `,
})
export class CustomerPaymentMethodComponent implements AfterViewInit {
  constructor(
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProductService
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadPayPalScript().then(() => {
        const productPrice = this.productService.getSelectedProductPrice() || '0.01';
        paypal.Buttons({
          createOrder: (_: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: productPrice.toString()
                }
              }]
            });
          },
          onApprove: (_: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              this.router.navigate(['customer/paymentsuccess', details.id]);
            });
          },
          onCancel: () => {
            console.log('Payment Cancelled');
          },
          onError: (err: any) => {
            console.error('Payment Error: ', err);
          }
        }).render('#paypal-button-container');
      });
    }
  }

  loadPayPalScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://www.paypal.com/sdk/js?client-id=AalFHw36Pr_cNCwcoGfJc4zlBYjVnH_9Ew4UFZieMn8Z4AoO2orOS9uJdeSSMbUXiWy7BG6sLOEz9i7m';
        scriptElement.onload = () => resolve();
        scriptElement.onerror = () => reject();
        document.body.appendChild(scriptElement);
      } else {
        reject(new Error('PayPal SDK can only be loaded in the browser'));
      }
    });
  }
}