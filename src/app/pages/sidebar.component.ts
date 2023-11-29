import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../components/button.component';
import { ProgressBarComponentModule } from '../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonUnborderedModule } from '../components/buttonunbordered.component';
@Component({
  selector: 'sidebar',
  template: `
    <nav
      class="flex flex-col h-screen py-12 px-4 border-softblack border-r-[1px]"
    >
      <div class="px-6 text-small">header</div>
      <div class="h-6" id="spacer"></div>
      <div class="flex flex-col justify-between h-screen">
        <div class="flex flex-col">
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
          } @else {
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

@NgModule({
  declarations: [Sidebar],
  exports: [Sidebar],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    ButtonUnborderedModule,
  ],
})
export class SidebarModule {}
