// import { Component, HostListener, ViewChild } from '@angular/core';
// import { Router, RouterOutlet } from '@angular/router';
// import { FormsModule, NgForm } from '@angular/forms';
// import { MerchantRegistrationService } from './merchantregistration.service';
// import { ButtonwIcon } from '../../components/button.component';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'merchantdata-form',
//   standalone: true,
//   imports: [RouterOutlet, FormsModule, ButtonwIcon, CommonModule],
//   template: `
//     <form #merchantDataForm="ngForm" (ngSubmit)="onSubmit(merchantDataForm)">
//       <div class="flex flex-col">
//         <h1
//           class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
//         >
//           Lets get to know each other.
//         </h1>
//         <div class="h-4" id="spacer"></div>
//         <div class="flex flex-col gap-4">
//           <div>
//             <input
//               type="tel"
//               id="contactNumber"
//               required
//               [(ngModel)]="business.contactNumber"
//               (ngModelChange)="onFormChange()"
//               name="contactNumber"
//               pattern="^[0-9]*$"
//               #contactNumber="ngModel"
//               class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
//               placeholder="contact number"
//             />
//             <!-- errors -->
//             <div
//               class="{{
//                 !contactNumberError().isHidden && contactNumber.touched
//                   ? 'opacity-100 translate-y-0 h-8'
//                   : 'opacity-0 -translate-y-3/4 h-0'
//               }} text-reject transition-all ease-in-out duration-500 block"
//             >
//               {{ contactNumberError().message }}
//             </div>
//           </div>
//           <div>
//             <input
//               type="email"
//               name="contactEmail"
//               [(ngModel)]="merchant.data.email"
//               (ngModelChange)="onFormChange('email', $event)"
//               #contactEmail="ngModel"
//               required
//               pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
//               class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-2 border-2 border-solid max-md:pl-1"
//               placeholder="your contact email"
//             />
//             <!-- email error -->
//             <div
//               class="text-reject"
//               [hidden]="contactEmail.valid || contactEmail.pristine"
//             >
//               Please enter a valid email address.
//             </div>
//           </div>
//           <div class="h-32" id="spacer"></div>
//           <div class="flex flex-col items-end" type="submit">
//             <buttonwicon type="submit" label="Continue"></buttonwicon>
//             <p
//               class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
//             >
//               or press Enter
//             </p>
//           </div>
//         </div>
//       </div>
//     </form>
//     <div>
//       <button (click)="sendData()">send</button>
//     </div>
//   `,
// })
// export class MerchantDataFormComponent {
//   @ViewChild('merchantDataForm') merchantDataForm: NgForm;

//   merchant = this.mrs.merchant;

//   constructor(
//     private router: Router,
//     private mrs: MerchantRegistrationService
//   ) {
//     this.merchantDataForm = new NgForm([], []);
//   }

//   onFormChange(fieldName: string, newValue: any) {
//     this.mrs.setMerchant(this.merchant);
//   }

//   onSubmit(form: NgForm) {
//     if (form.valid) {
//       this.merchant = form.value;
//       this.mrs.setMerchant(this.merchant);
//       console.log('Form data:', this.merchant);
//       this.navigateToNextPage();
//     } else {
//       console.log('Form is not valid');
//     }
//   }

//   sendData() {
//     console.log('Sending data to backend...');
//     this.mrs.sendData().subscribe({
//       next: (response) => console.log(response),
//       error: (error) => console.error('There was an error!', error),
//     });
//   }

//   navigateToNextPage() {
//     this.router.navigate(['/merchant/register/complete']);
//   }

//   @HostListener('document:keydown.enter', ['$event'])
//   onKeydownHandler(event: KeyboardEvent) {
//     if (this.merchantDataForm.valid) {
//       this.navigateToNextPage();
//     }
//   }
// }
