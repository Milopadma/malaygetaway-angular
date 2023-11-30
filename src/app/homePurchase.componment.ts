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
          <h1 class="text-4xl font-bold mb-8">Featured Locations</h1>
          <div class="relative">
            <button (click)="scrollLeft()" class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white text-black text-2xl p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none z-10">
              ‹
            </button>
            <div id="featuredSlider" class="flex overflow-hidden transition-transform duration-500">
              <div *ngFor="let location of locations" class="flex-none w-1/4 p-4" [ngClass]="animateClass">
                <img [src]="location.imageUrl" alt="{{location.name}}" class="w-full h-auto rounded">
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
            <div class="border border-gray-200 p-8 rounded-lg transition-transform transform hover:scale-105">
              <h2 class="text-2xl font-bold mb-4">Mount Everest Base Camp</h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque est quis diam accumsan consequat.
              </p>
            </div>
            <!-- Repeat for other trending places -->
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-100">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold my-8">Places to Review</h1>
          <div class="grid grid-cols-4 gap-8">
            <div class="border border-gray-200 p-8 rounded-lg transition-transform transform hover:scale-105">
              <h2 class="text-2xl font-bold mb-4">Bali, Indonesia</h2>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque est quis diam accumsan
                consequat. Nullam ut justo eu felis tincidunt tristique id non purus.
              </p>
            </div>
            <!-- Repeat for other places to review -->
          </div>
        </div>
      </section>
    `,
})
export class homepurchase implements AfterViewInit {
        locations = [
            { id: 1, name: 'Tokyo, Japan', imageUrl: 'https://res.cloudinary.com/dk-hub/image/upload/q_81,w_1280,c_limit,f_auto/v1/DK/0d7ec1db8a6d4cd58a30b38f5eee296f/3963db85aa704a4f81834ef6dfb48117.jpg', description: 'Description for Tokyo...' },
            { id: 2, name: 'New York, USA', imageUrl: 'https://res.cloudinary.com/dk-hub/image/upload/q_81,w_1280,c_limit,f_auto/v1/DK/0d7ec1db8a6d4cd58a30b38f5eee296f/3963db85aa704a4f81834ef6dfb48117.jpg', description: 'Description for New York...' },
            { id: 3, name: 'Paris, France', imageUrl: 'https://res.cloudinary.com/dk-hub/image/upload/q_81,w_1280,c_limit,f_auto/v1/DK/0d7ec1db8a6d4cd58a30b38f5eee296f/3963db85aa704a4f81834ef6dfb48117.jpg', description: 'Description for Paris...' },
            { id: 4, name: 'London, UK', imageUrl: 'https://res.cloudinary.com/dk-hub/image/upload/q_81,w_1280,c_limit,f_auto/v1/DK/0d7ec1db8a6d4cd58a30b38f5eee296f/3963db85aa704a4f81834ef6dfb48117.jpg', description: 'Description for London...' },
        ];
        animateClass = '';

        scrollLeft(): void {
            const lastItem = this.locations.pop();
            if (lastItem) {
                this.locations.unshift(lastItem);
                this.triggerAnimation();
            }
        }
    
        scrollRight(): void {
            const firstItem = this.locations.shift();
            if (firstItem) {
                this.locations.push(firstItem);
                this.triggerAnimation();
            }
        }
    
        triggerAnimation(): void {
            this.animateClass = 'animate-slide';
            setTimeout(() => this.animateClass = '', 500); // Reset class after animation
        }
    
        ngAfterViewInit(): void {
            // Initialization logic
        }
    }
    

@NgModule({
    declarations: [homepurchase],
    exports: [homepurchase],
    imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule]
})
export class homepurchaseModule1{}