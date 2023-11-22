import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <div class="flex justify-center flex-col items-center">
      <div class="h-24"></div>
      <h1 class="text-titles">404: Page Not Found</h1>
      <div class="h-24"></div>
      <p class="text-small">The page you are looking for could not be found.</p>
    </div>
  `,
})
export class NotFoundComponent {}
