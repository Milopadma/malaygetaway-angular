import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { buttonwIconModule } from '../../components/button.component';
import { Router } from '@angular/router';

type TouristLocation = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
};

@Component({
  selector: 'HomePurchase',
  template: `
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <div class="text-box">
          <h1 class="text-6xl font-bold mb-3">Home</h1>
        </div>
        <div class="text-box">
          <h1 class="text-2xl font-medium mb-8">Welcome</h1>
        </div>
        <h1 class="text-4xl font-bold mb-1">Featured Locations</h1>
        <div class="relative">
          <button
            (click)="scrollLeft()"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10"
          >
            ‹
          </button>
          <div
            id="featuredSlider"
            class="grid grid-cols-3 gap-4 overflow-hidden transition-transform duration-500"
          >
          <!-- the cards -->
            @for (location of locations; track location.id){
            <div
              class="flex-none p-4"
              [ngClass]="{
                'w-full': location.id === 1,
              }"
            >
              <div class="card rounded-lg shadow-lg overflow-hidden">
                <img
                  [src]="location.imageUrl"
                  alt="{{ location.name }}"
                  class="w-full h-[250px] object-cover"
                  (click)="navButton1()"
                />
                <div class="p-6">
                  <h2 class="text-2xl font-bold mb-4">{{ location.name }}</h2>
                  <p class="text-gray-700 line-clamp-3" [ngClass]="{ 'line-clamp-none': readMore[location.id] }">
                    {{ location.description }}
                  </p>
                  <button
                    class="mt-4 text-blue-500"
                    (click)="toggleReadMore(location.id)"
                  >
                    {{ readMore[location.id] ? 'Read Less' : 'Read More' }}
                  </button>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
        <button
          (click)="scrollRight()"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10"
        >
          ›
        </button>
      </div>
    </section>
  `,
})
export class CustomerHomeComponent {
  constructor(private router: Router) {}
  locations = [
    {
      id: 1,
      name: 'Genting Highland',
      imageUrl:
        'https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o=',
      description:
        'Nestled in the mountains near Kuala Lumpur, Genting Highlands is a popular hill resort known for its cool climate and entertainment options. It features indoor and outdoor theme parks, a bustling casino, luxury hotels, and a cable car system offering breathtaking views of the surrounding area.',
    },
    {
      id: 2,
      name: 'Petronas Kuala Lumpur',
      imageUrl:
        'https://static.toiimg.com/thumb/54444342/petronas.jpg?width=1200&height=900',
      description:
        'The Petronas Towers, also known as the Petronas Twin Towers, are iconic skyscrapers in Kuala Lumpur. They were once the tallest twin towers in the world and remain an architectural marvel. Visitors can take an elevator ride to the observation deck for panoramic views of the city or explore the shopping mall and cultural center within the towers.',
    },
    {
      id: 3,
      name: 'Aquaria KLCC',
      imageUrl:
        'https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564725398383-e4d417ed431130adc24eaad17b3f6c7c.jpeg',
      description:
        ' Located beneath the Kuala Lumpur Convention Centre, Aquaria KLCC is a world-class oceanarium that houses a diverse collection of marine life. Visitors can explore a 90-meter-long underwater tunnel, where they can observe sharks, rays, and other aquatic species up close. The aquarium offers an educational and immersive experience for all ages.',
    },
    {
      id: 4,
      name: 'Istana Negara',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Kuala_Lumpur_Malaysia-Istana_Negara-Jalan-Duta-01.jpg',
      description:
        'The Istana Negara, or National Palace, serves as the official residence of the Malaysian King. This majestic palace is a symbol of Malaysia monarchy and heritage. While visitors cannot enter the palace itself, its stunning architecture and grandeur make it a significant landmark in Kuala Lumpur.',
    },
  ] as TouristLocation[];
  readMore = [false, false, false, false];

  scrollLeft(): void {
    const lastItem = this.locations.pop();
    if (lastItem) {
      this.locations.unshift(lastItem);
    }
  }

  scrollRight(): void {
    const firstItem = this.locations.shift();
    if (firstItem) {
      this.locations.push(firstItem);
    }
  }

  toggleReadMore(index: number): void {
    this.readMore[index] = !this.readMore[index];
  }

  ngAfterViewInit(): void {
    // Initialization logic
  }
  navButton1() {
    this.router.navigate(['product/:id']);
  }
}

@NgModule({
  declarations: [CustomerHomeComponent],
  exports: [CustomerHomeComponent],
  imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule],
})
export class HomePurchaseModule {}
