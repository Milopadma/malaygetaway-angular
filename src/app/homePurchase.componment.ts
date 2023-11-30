import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ProgressBarComponentModule } from "./components/form/progressbar.component";
import { buttonwIconModule } from "./components/button.component";
import { Router } from '@angular/router';

import { AfterViewInit } from '@angular/core';


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
      <button (click)="scrollLeft()" class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10">
        ‹
      </button>
      <div id="featuredSlider" class="flex overflow-hidden transition-transform duration-500">
        <div *ngFor="let location of locations" class="flex-none w-1/4 p-4">
          <img [src]="location.imageUrl" alt="{{location.name}}" class="w-[400px] h-[250px] object-cover rounded hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
          (click)="navButton1()">
          <h2 class="text-2xl font-bold mb-4">{{location.name}}</h2>
          <p class="text-gray-700">{{location.description}}</p>
        </div>         
      </div>
      <button (click)="scrollRight()" class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10">
        ›
      </button>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto">
            <h1 class="text-4xl font-bold mb-8">Trending</h1>
            <div class="grid grid-cols-3 gap-8">
            <div class="border border-gray-200 p-8 rounded-lg transition-transform transform hover:scale-105" (click)="navButton1()">
                <h2 class="text-2xl font-bold mb-4">Petronas Kuala Lumpur</h2>
                <img src="https://th.bing.com/th/id/R.d909e94ca5d9a7337c39a30e9f3067ab?rik=f4GftoJd57v0yw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-iPOEn16pts0%2fUAlO0TDwvlI%2fAAAAAAAAAEg%2f0h72JIuIkLY%2fs1600%2fPetronas-Towers-01.jpg&ehk=us5opYDRyfbzgpvVRIrMwWyRY4Q7nCeKUM8QKwzzY3s%3d&risl=&pid=ImgRaw&r=0" alt="Petronas Kuala Lumpur" />
                <p class="text-gray-700">
                The Petronas Towers, also known as the Petronas Twin Towers, are iconic skyscrapers in Kuala Lumpur...
                </p>
            </div>
            </div>
        </div>
        </section>



        <section class="py-16 bg-gray-100">
        <div class="container mx-auto ">
            <h1 class="text-4xl font-bold mb-8">Place To Review</h1>
            <div class="grid grid-cols-3 gap-8">
            <div class="border border-gray-200 p-8 rounded-lg transition-transform transform hover:scale-105" (click)="navButton1()">
                <h2 class="text-2xl font-bold mb-4">Genting Highland</h2>
                <img src="https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o=" alt="Petronas Kuala Lumpur" />
                <p class="text-gray-700">
                Nestled in the mountains near Kuala Lumpur, Genting Highlands is a popular hill resort known for its cool climate and entertainment options. It features indoor and outdoor theme parks, a bustling casino, luxury hotels, and a cable car system offering breathtaking views of the surrounding area.
                </p>
            </div>
            </div>
        </div>
        </section>
    `,
})
export class CustomerHomeComponent implements AfterViewInit {
    constructor(private router: Router) {}
        locations = [
            { id: 1, name: 'Genting Highland', imageUrl: 'https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o=', description: 'Nestled in the mountains near Kuala Lumpur, Genting Highlands is a popular hill resort known for its cool climate and entertainment options. It features indoor and outdoor theme parks, a bustling casino, luxury hotels, and a cable car system offering breathtaking views of the surrounding area.' },
            { id: 2, name: 'Petronas Kuala Lumpur', imageUrl: 'https://th.bing.com/th/id/R.d909e94ca5d9a7337c39a30e9f3067ab?rik=f4GftoJd57v0yw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-iPOEn16pts0%2fUAlO0TDwvlI%2fAAAAAAAAAEg%2f0h72JIuIkLY%2fs1600%2fPetronas-Towers-01.jpg&ehk=us5opYDRyfbzgpvVRIrMwWyRY4Q7nCeKUM8QKwzzY3s%3d&risl=&pid=ImgRaw&r=0', description: 'The Petronas Towers, also known as the Petronas Twin Towers, are iconic skyscrapers in Kuala Lumpur. They were once the tallest twin towers in the world and remain an architectural marvel. Visitors can take an elevator ride to the observation deck for panoramic views of the city or explore the shopping mall and cultural center within the towers.' },
            { id: 3, name: 'Aquaria KLCC', imageUrl: 'https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564725398383-e4d417ed431130adc24eaad17b3f6c7c.jpeg', description: ' Located beneath the Kuala Lumpur Convention Centre, Aquaria KLCC is a world-class oceanarium that houses a diverse collection of marine life. Visitors can explore a 90-meter-long underwater tunnel, where they can observe sharks, rays, and other aquatic species up close. The aquarium offers an educational and immersive experience for all ages.' },
            { id: 4, name: 'Istana Negara', imageUrl: 'https://th.bing.com/th/id/R.89297dcd3bd75ff36ce602b24995d0ba?rik=%2bGfQJfuHqslxww&riu=http%3a%2f%2fstatic6.businessinsider.com%2fimage%2f58925f1edd089582728b466b-1200%2fistana-negara-kuala-lumpur-malaysia.jpg&ehk=H%2fd4a%2blgmu2KhErEoF%2fYS5mepJbWbyiF7MO%2bUkzCKyI%3d&risl=&pid=ImgRaw&r=0', description: 'The Istana Negara, or National Palace, serves as the official residence of the Malaysian King. This majestic palace is a symbol of Malaysia monarchy and heritage. While visitors cannot enter the palace itself, its stunning architecture and grandeur make it a significant landmark in Kuala Lumpur.' },
        ];
    
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
    imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule]
})
export class homepurchaseModule1{}