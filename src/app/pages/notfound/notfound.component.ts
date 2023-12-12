import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '../../components/icon.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="flex justify-center flex-col items-center">
      <div class="h-24"></div>
      <h1 class="text-titles">404: Page Not Found</h1>
      <div class="h-24"></div>
      <p class="text-small">The page you are looking for could not be found.</p>
      <!-- back button -->
      <div class="h-12"></div>
      <button
        class="text-small underline flex flex-row items-center gap-2"
        (click)="navigateToPage('/')"
      >
        <icon iconName="LeftArrow"></icon>
        Back to Home
      </button>
    </div>
  `,
})
export class NotFoundComponent {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
