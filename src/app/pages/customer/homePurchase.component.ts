import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { Product } from '../../types';

type TouristLocation = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
};

@Component({
  selector: 'HomePurchase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16">
      <div class="container mx-auto">
        <div class="text-box">
          <h1 class="text-6xl font-bold mb-3">Home</h1>
        </div>
        <div class="text-box">
          <h1 class="text-2xl font-medium mb-8">Welcome</h1>
        </div>
        <h1 class="text-4xl font-bold mb-1">Featured Locations</h1>
        <div class="relative">
          <!-- <button
            (click)="scrollLeft()"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10"
          >
            ‹
          </button> -->
          <div
            id="featuredSlider"
            class="grid grid-cols-3 gap-4 transition-transform duration-500"
          >
            <!-- the cards -->
            <!-- @for (p of products; track p.productId){
            <div
              class="flex-none p-4 hover:scale-110 z-50 transition-all duration-300"
              [ngClass]="{
                'w-full': p.productId === 1,
              }"
            >
              <div class="card rounded-lg shadow-lg overflow-hidden">
                <img
                  [src]="p.productImageURLs[0]"
                  alt="{{ p.name }}"
                  class="w-full h-[250px] object-cover cursor-pointer"
                  (click)="navigateToProductPage(p.productId)"
                />
                <div class="p-6">
                  <h2 class="text-2xl font-bold mb-4">{{ p.name }}</h2>
                  <p
                    class="text-gray-700 line-clamp-3"
                    [ngClass]="{ 'line-clamp-none': readMore[p.productId] }"
                  >
                    {{ p.description }}
                  </p>
                  <button
                    class="mt-4 text-blue-500"
                    (click)="toggleReadMore(p.productId)"
                  >
                    {{ readMore[p.productId] ? 'Read Less' : 'Read More' }}
                  </button>
                </div>
              </div>
            </div>
            } -->
          </div>
        </div>
        <!-- <button
          (click)="scrollRight()"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10"
        >
          › -->
        <!-- </button> -->
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto">
        <h1 class="text-4xl font-bold mb-8">Trending</h1>
        <div class="grid grid-cols-3 gap-8">
          <div
            class="border p-8 rounded-lg transition-transform transform hover:scale-105"
            (click)="navigateToProductPage(2)"
          >
            <h2 class="text-2xl font-bold mb-4">Petronas Kuala Lumpur</h2>
            <img
              src="https://img.peapix.com/25ba9477a6e74715aadefcd92e93abbd_480.jpg"
              alt="Petronas Kuala Lumpur"
            />
            <p class="text-gray-700">
              The Petronas Towers, also known as the Petronas Twin Towers, are
              iconic skyscrapers in Kuala Lumpur...
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto ">
        <h1 class="text-4xl font-bold mb-8">Place To Review</h1>
        <div class="grid grid-cols-3 gap-8">
          <div
            class="border border-gray-200 p-8 rounded-lg transition-transform transform hover:scale-105"
            (click)="navigateToProductPage(1)"
          >
            <h2 class="text-2xl font-bold mb-4">Genting Highland</h2>
            <img
              src="https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o="
              alt="Petronas Kuala Lumpur"
            />
            <p class="text-gray-700">
              Nestled in the mountains near Kuala Lumpur, Genting Highlands is a
              popular hill resort known for its cool climate and entertainment
              options. It features indoor and outdoor theme parks, a bustling
              casino, luxury hotels, and a cable car system offering
              breathtaking views of the surrounding area.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CustomerHomeComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}
  products: Product[] = [];

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((products) => {
      this.products = products;
    });

    console.log(this.products);
  }

  readMore = [false, false, false, false];

  scrollLeft(): void {
    const lastItem = this.products.pop();
    if (lastItem) {
      this.products.unshift(lastItem);
    }
  }

  scrollRight(): void {
    const firstItem = this.products.shift();
    if (firstItem) {
      this.products.push(firstItem);
    }
  }

  toggleReadMore(index: number): void {
    this.readMore[index] = !this.readMore[index];
  }

  ngAfterViewInit(): void {
    // Initialization logic
  }

  navigateToProductPage(id: number): void {
    this.router.navigate(['/customer/purchase', id]);
  }
}
