import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ProgressBarComponentModule } from "./components/form/progressbar.component";
import { buttonwIconModule } from "./components/button.component";
import { Router } from '@angular/router';

@Component({
    selector: 'purchase4',
    template: `
    <section>
        <br>
        <br>
        <br>
        <br>
        <br>
        <main class="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 font-sans text-softblack bg-softwhite py-10 rounded-lg shadow-2xl">
            <div class="justify-center items-center flex flex-col py-5 px-20 max-md:px-10">
                <progress-bar [labels]="['Personal Detail', 'Billing Address', 'Payment Method', 'Done']" [current]="'Payment Method'"></progress-bar>
                <br>
                <div class="flex flex-col">
                </div>
            </div>
            <div class="bg-white p-6 rounded-lg">
                <h2 class="text-subtitles font-bold mb-4">Payment Method</h2>
                <p class="text-small text-softblack mb-6">Choose a Payment Method</p>
                <div class="flex justify-center gap-4 mb-6">
                    <button class="group py-1 px-10 border font-bold rounded-lg flex flex-col items-center text-softblack"
                            [class.bg-softblack]="selectedMethod === 'credit'"
                            [class.text-white]="selectedMethod === 'credit'"
                            [class.border-softblack]="selectedMethod === 'credit'"
                            (click)="selectMethod('credit')">
                        <div class="w-12 h-12 mb-2 flex justify-center items-center">
                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-transparent-png-stickpng-10.png" alt="Credit Card" class="h-10">
                        </div>
                        <span>Credit Card</span>
                    </button>
                    <button class="group py-1 px-10 font-bold border rounded-lg flex flex-col items-center text-softblack"
                            [class.bg-softblack]="selectedMethod === 'paypal'"
                            [class.text-white]="selectedMethod === 'paypal'"
                            [class.border-softblack]="selectedMethod === 'paypal'"
                            (click)="selectMethod('paypal')">
                        <div class="w-20 h-12 mb-2 flex justify-center items-center">
                            <img src="https://www.pngplay.com/wp-content/uploads/8/Paypal-Transparent-Image.png" alt="PayPal" class="h-20">
                        </div>
                        <span>PayPal</span>
                    </button>
                </div>
                <form *ngIf="selectedMethod === 'paypal'" class="flex flex-col gap-4">
                    <div class="text-center mt-4">
                        <p class="mb-4 text-small">Enter your PayPal details:</p>
                        <div>
                            <label for="first_name" class="block mb-2 text-small font-medium text-softblack">PayPal Email</label>
                            <input type="text" id="first_name" placeholder="email@example.com" name="first_name" class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                        </div>
                        <br>
                        <button (click)="navButton3()" class="text-white bg-softblack hover:bg-fadedgray focus:ring-4 focus:outline-none focus:ring-blue-300 mb-2 font-medium rounded-lg text-small px-8 py-2.5 text-center">Proceed with PayPal</button>
                    </div>
                </form>
                <form *ngIf="selectedMethod === 'credit'" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
                    <div class="mb-1">
                        <label for="cardNumber" class="block mb-1 text-small font-medium text-softblack">Card Number</label>
                        <input type="text" id="cardNumber"  placeholder="1234 5678 9097 1287" name="cardNumber" class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" (input)="formatCardNumber($event)" required>
                    </div>
                    <div class="mb-1">
                        <label for="address" class="block mb-1 text-small font-medium text-softblack">Card Holder Name</label>
                        <input type="text" id="address"  placeholder="Name Surename" name="address" class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    </div>
                    <div class="grid gap-6 mb-1 lg:grid-cols-2">
                            <div>
                                <label for="expirationDate" class="block mb-2 text-small font-medium text-softblack">Expiration Date</label>
                                <input type="text" id="expirationDate" placeholder="MM/YY" name="expirationDate" class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" (input)="formatExpirationDate($event)" required>
                            </div>
                            <div>
                            <label for="cvv" class="block mb-1 text-small font-medium text-softblack">CVV</label>
                            <input type="text" id="cvv" placeholder="123" name="cvv" class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" (input)="formatCVV($event)" required>
                        </div>
                    </div>
                     <div class="flex justify-end space-x-4">
                        <button (click)="navButton1()" type="button" class="text-softblack bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                        <button (click)="navButton2()" type="submit" class="text-white bg-softblack hover:bg-fadedgray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                    </div>
                </form>
              </div>
        </main>
    </section>
  `
})
export class purchase4 {
    selectedMethod: string = 'credit';
    currentStep: string = 'Payment Method';
    selectMethod(method: string): void {
        this.selectedMethod = method;
    }
    onSubmit(): void {
        console.log('Form submitted:', this.selectedMethod);
    }
    constructor(private router: Router) {}
    navButton1() {
        this.router.navigate(['purchase1']);
      }
    navButton2() {
        this.router.navigate(['purchase5']);
    }
    navButton3() {
        this.router.navigate(['purchase5']);
    }
    formatCardNumber(event: any) {
        let value = event.target.value.split(' ').join('');
        if (value.length > 16) {
            value = value.substring(0, 16);
        }
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        event.target.value = value; 
    }
    formatExpirationDate(event: any) {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        event.target.value = value;
    }
    formatCVV(event: any) {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 3) {
            value = value.substring(0, 3);
        }
        event.target.value = value;
    }
}
@NgModule({
    declarations: [purchase4],
    exports: [purchase4],
    imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule]
})
export class purchaseModule4 {}