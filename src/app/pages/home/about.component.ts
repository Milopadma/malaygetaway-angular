import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavbar } from '../../components/topnavbar.component';
import { Footer } from './footer.component';
@Component({
  selector: 'about',
  standalone: true,
  imports: [TopNavbar, Footer],
  template: `
    <topnavbar class="sticky top-0 z-50" />
    <div class="flex flex-col justify-center items-center ">
      <div class="h-16" id="spacer"></div>
      <h1>About Us</h1>
      <div class="h-4" id="spacer"></div>
      <p class="max-w-xl">
        MalayGetaway is a platform for local businesses to list their products
        and services. We aim to promote local businesses and encourage
        Malaysians to support local products and services.
      </p>
    </div>
    <app-footer></app-footer>
  `,
})
export class About {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
