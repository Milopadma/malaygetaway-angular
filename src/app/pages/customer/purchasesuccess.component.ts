import { Component,NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceiptService } from '../../api/receipt.service';
import { ProgressBarComponent } from '../../components/form/progressbar.component';

@Component({
  selector: 'purchase-success',
  standalone: true,
  imports: [ProgressBarComponent, CommonModule],
  template: `
    <section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <main class="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 font-sans bg-green-50 py-10 rounded-lg shadow-2xl">
        <div class="flex justify-center items-center flex-col py-5">
          <progress-bar
            [labels]="['Personal Detail', 'Billing Address', 'Payment Method', 'Done']"
            [current]="'Done'"
          ></progress-bar>
          <div *ngIf="receiptDetails">
            <h3>Receipt Details:</h3>
            <p>First Name: {{ receiptDetails.personalDetail.firstName }}</p>
            <p>Last Name: {{ receiptDetails.personalDetail.lastName }}</p>
            <p>Address: {{ receiptDetails.personalDetail.address }}</p>
            <p>City: {{ receiptDetails.personalDetail.city }}</p>
            <p>State: {{ receiptDetails.personalDetail.state }}</p>
            <p>Country: {{ receiptDetails.personalDetail.country }}</p>
            <p>Postal Code: {{ receiptDetails.personalDetail.postalCode }}</p>
            <p>Billing Address: {{ receiptDetails.billingAddress.address }}</p>
            <p>Billing City: {{ receiptDetails.billingAddress.city }}</p>
            <p>Billing State: {{ receiptDetails.billingAddress.state }}</p>
            <p>Billing Country: {{ receiptDetails.billingAddress.country }}</p>
            <p>Billing Postal Code: {{ receiptDetails.billingAddress.postalCode }}</p>
            <p>PayPal Email: {{ receiptDetails.payPalDetails.email }}</p>
            <p>Order ID: {{ receiptDetails.payPalDetails.orderId }}</p>
            <p>Payment Status: {{ receiptDetails.payPalDetails.paymentStatus }}</p>
          </div>
          <div class="mt-10">
            <div class="text-center bg-green-100 p-20 rounded-lg border border-green-500">
              <div class="flex justify-center items-center mb-2">
                <img src="https://www.pinclipart.com/picdir/big/523-5232109_check-mark-computer-icons-clip-art-green-checkmark.png" alt="Payment Success" class="h-20"/>
              </div>
              <h2 class="text-4xl font-bold mb-2 text-green-800">PAYMENT SUCCESSFUL</h2>
              <p class="text-xl text-green-700">Your payment has been processed successfully</p>
              <div class="mt-6 flex justify-center">
                <button (click)="navButton1()" class="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-3 px-20 rounded">
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
export class CustomerSuccessfulyPurchase implements OnInit {
  receiptDetails: any;
  receiptId!: string;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private receiptService: ReceiptService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { [key: string]: any }) => {
      console.log('Received params:', params);
      if (params['id']) {
        this.receiptId = params['id'];
        this.getReceiptDetails();
      } else {
        console.error('Receipt ID is undefined');
        // Handle kasus ketika receiptId tidak ditemukan
      }
    });
  }
  

  getReceiptDetails() {
    this.receiptService.getReceiptDetails(this.receiptId).subscribe(
      (response) => {
        this.ngZone.run(() => {
          if(response && response.data && response.data.receipt) {
            this.receiptDetails = response.data.receipt;
            console.log('Receipt Details:', this.receiptDetails);
          } else {
            console.error('Invalid response format');
            // Handle kasus ketika format respons tidak valid
          }
        });
      },
      (error) => {
        this.ngZone.run(() => {
          console.error('Error fetching receipt details', error);
          // Handle error di sini
        });
      }
    );
  }

  navButton1() {
    this.router.navigate(['customer/home']);
  }
}


