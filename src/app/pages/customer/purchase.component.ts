import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'PurchasePage',
  template: `
    <section class="font-sans text-softblack bg-white">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <nav class="text-small mb-5" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <a href="#" class="text-blue-600 hover:text-blue-700">Malay Getaway</a>
                        <span class="text-gray-500 mx-2">/</span>
                    </li>
                    <li class="flex items-center">
                        <a href="#" class="text-blue-600 hover:text-blue-700">MALAYSIA</a>
                        <span class="text-gray-500 mx-2">/</span>
                    </li>
                    <li aria-current="page">
                        <a href="#" class="text-gray-400" aria-current="page">Genting Highland</a>
                    </li>
                </ol>
            </nav>

            <header class="mb-12">
                <h1 class="text-5xl font-bold mb-4">Genting Highland</h1>
                <div class="flex items-center mb-4">
                    <span class="text-2xl font-semibold mr-4">4.6</span>
                    <span class="text-4xl text-yellow-500">★★★★☆</span>
                    <span class="text-lg text-gray-500 ml-2">(5K+ reviews)</span>
                </div>
                <p class="text-xl text-gray-700">Hill Station In Malaysia. Genting Highlands, 69000 Genting Highlands, Pahang</p>
            </header>
            <main class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="md:col-span-2 shadow-lg rounded-lg overflow-hidden">
                    <img src="https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o=" alt="Pagoda of the Chin Swee Caves Temple in Malaysia" class="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out">
                </div>
                <div class="space-y-4 relative">
                    <div class="shadow-lg rounded-lg overflow-hidden">
                        <img src="https://media.gettyimages.com/id/487412885/photo/first-world-hotel-genting-highlands.jpg?s=612x612&w=0&k=20&c=NSkdM_yfhuPX9YS6phHTeWkKEOmyP37JkBSVkphFOlc=" alt="First World Hotel in Genting Highlands" class="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out">
                    </div>
                    <div class="shadow-lg rounded-lg overflow-hidden">
                        <img src="https://media.gettyimages.com/id/1436067704/photo/aerial-view-of-resorts-world-genting-malaysias-premier-integrated-resort-destination-and-the.jpg?s=612x612&w=0&k=20&c=curcsWzy1C7qizxqLsRkuoBemRldWvzw9zRLzB67XSU=" alt="Aerial view of Resorts World Genting, Malaysia's premier integrated resort destination" class="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out">
                    </div>
                </div>
            </main>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article class="md:col-span-2 text-lg bg-gray-100 p-6 rounded-lg shadow-lg">
                    <p class="text-small">Going on a Genting Highlands trip and want to know all the best things to do in Genting Highlands? We have you covered! Below you will find our guide to all the best attractions in Genting Highlands, Malaysia to plan your ultimate trip.
                    Located just an hour away from Kuala Lumpur, Genting Highlands is one of the most popular destinations for a getaway. This is a true resort destination with so many activities at Genting Highlands Malaysia on offer – theme parks, luxury hotels, shopping, a huge casino and plenty of places to eat.
                    Genting Highlands is a hill station, making it an excellent destination for visitors looking to escape the heat. The climate is cool, the air is fresh and the area is surrounded by a lush rainforest.
                    Even though I knew all this before visiting, it surprised me just how different the weather is here compared to KL.</p>
                </article>
                    <div class="flex justify-center items-center">
                        <div class="bg-white p-10 rounded-lg shadow-lg max-w-xs mx-auto">
                            <div class="text-center mb-1">
                                <span class="text-4xl font-bold text-gray-800">RM 200.78</span>
                            </div>
                            <div class="text-center mb-2">
                                <span class="text-paragraph text-gray-400 line-through ml-2">RM 350.20</span>
                            </div>
                            <a routerLink="personal"></a>
                                <button (click)="navButton1()" class="text-lg bg-softblack text-white font-semibold py-3 px-20 rounded-lg border hover:bg-orange-600 transition ease-in-out duration-300">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  `,
})
export class CustomerProductComponent {
    constructor(private router: Router) {}
    navButton1() {
      this.router.navigate(['personaldetail/:id']);
    }
}

@NgModule({
  declarations: [CustomerProductComponent],
  exports: [CustomerProductComponent],
  imports: [CommonModule, buttonwIconModule, ProgressBarComponentModule],
})
export class CustomerProductModule {}
