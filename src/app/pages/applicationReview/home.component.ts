import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HugeButton } from '../../components/huge-button.component';

@Component({
  selector: 'officer-home',
  standalone: true,
  imports: [HugeButton],
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <h1 class="text-titles">Home</h1>
      <div class="h-4" id="spacer"></div>
      <span class="text-paragraph"> Welcome, Officer </span>
      <div class="h-4" id="spacer"></div>
      <!-- huge buttons -->
      <div class="flex flex-row w-full">
        <huge-button
          label="View Applications"
          (click)="navigateToPage('officer/applications')"
        ></huge-button>
        <div class="w-12" id="spacer"></div>
        <huge-button
          label="View Reports"
          (click)="navigateToPage('officer/reports')"
        ></huge-button>
      </div>
    </div>
  `,
})
export class OfficerHomeComponent {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
