import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonUnbordered } from '../components/buttonunbordered.component';
import { IconComponent } from '../components/icon.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [ButtonUnbordered, IconComponent],
  template: `
    <nav
      class="flex flex-col py-12 px-4 border-softblack border-r-[1px] sticky top-0 h-screen max-h-screen overflow-y-auto"
    >
      <div class="px-6 text-small"><icon iconName="Logo"></icon></div>
      <div class="h-6" id="spacer"></div>
      <div class="flex flex-col justify-between h-screen">
        <div class="flex flex-col">
          <!-- merchant view -->
          @if (type === "merchant") {
          <buttonunbordered
            label="Home"
            (click)="navigateToPage('merchant/home')"
          ></buttonunbordered>
          <buttonunbordered
            label="View Products"
            (click)="navigateToPage('merchant/products')"
          ></buttonunbordered>
          <buttonunbordered
            label="View Reports"
            (click)="navigateToPage('merchant/reports')"
          ></buttonunbordered>
          <buttonunbordered
            label="Account"
            (click)="navigateToPage('merchant/account')"
          ></buttonunbordered>
          <!-- customer view -->
          } @if (type === "customer") {
          <buttonunbordered
            label="Home"
            (click)="navigateToPage('customer/home')"
          ></buttonunbordered>
          <buttonunbordered
            label="Review"
            (click)="navigateToPage('customer/pastorders')"
          ></buttonunbordered>
          <buttonunbordered
            label="Account"
            (click)="navigateToPage('merchant/account')"
          ></buttonunbordered>
          <!-- officer view -->
          } @else if (type === "officer"){
          <buttonunbordered
            label="Home"
            (click)="navigateToPage('officer/home')"
          ></buttonunbordered>
          <buttonunbordered
            label="View Applications"
            (click)="navigateToPage('officer/applications')"
          ></buttonunbordered>
          <buttonunbordered
            label="View Reports"
            (click)="navigateToPage('officer/reports')"
          ></buttonunbordered>
          <buttonunbordered
            label="Account"
            (click)="navigateToPage('officer/account')"
          ></buttonunbordered>
          }
        </div>
        <div>
          <button
            class="px-6 text-paragraph text-reject"
            (click)="navigateToPage('/')"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  `,
})
export class Sidebar {
  @Input() type!: string;

  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
