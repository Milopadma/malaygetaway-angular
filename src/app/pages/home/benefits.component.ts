import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopNavbar } from '../../components/topnavbar.component';
import { Footer } from './footer.component';

type Benefit = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'benefits',
  standalone: true,
  imports: [TopNavbar, Footer],
  template: `
    <topnavbar class="sticky top-0 z-50" />
    <div class="h-32" id="spacer"></div>
    <div class="flex justify-center gap-32">
      <div>
        <div class="h-16" id="spacer"></div>
        <h1>Why choose <br />MalayGetaway?</h1>
        <div class="h-4" id="spacer"></div>
        <p>Discover the benefits of <br />listing your products with us.</p>
      </div>
      <div class="flex flex-col gap-32">
        @for (benefit of benefits; track benefit.title) {
        <div class="flex flex-col gap-4">
          <div>
            <img src="{{ benefit.image }}" alt="placeholder" />
          </div>
          <div class="flex flex-col">
            <h2>{{ benefit.title }}</h2>
            <p class="max-w-md">
              {{ benefit.description }}
            </p>
          </div>
        </div>
        }
      </div>
    </div>
    <app-footer></app-footer>
  `,
})
export class Benefits {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  // placeholder data for now
  benefits = [
    {
      title: 'Wide Customer Reach',
      description:
        'Reach millions of potential customers looking for unique Malaysian experiences.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Easy Product Management',
      description:
        'Easily manage and update your product listings through our intuitive platform.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Secure Transactions',
      description:
        'Enjoy secure transactions with our trusted payment and escrow services.',
      image: 'https://via.placeholder.com/150',
    },
  ] as Benefit[];
}
