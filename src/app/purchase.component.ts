import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from './components/button.component';
import { ProgressBarComponentModule } from './components/form/progressbar.component';

@Component({
  selector: 'merchantPage',
  template: `
    <section class="font-sans text-softblack">
        <div class="border-t-2 border-fadedgray mt-5"></div>
        <header class="p-5">
            <h1 class="text-titles font-bold mb-2">Genting Highlands</h1>
            <p class="text-subtitles text-softgray">Hill station in Malaysia</p>
            <div class="flex items-center mt-4">
                <span class="text-paragraph font-semibold mr-2">4.8 (2K+ Reviews)</span>
                <span class="text-xl text-yellow-400">★★★★★</span>
            </div>
        </header>

        <main class="p-5 grid grid-cols-3 gap-3 mb-6">
            <figure class="col-span-2 bg-fadedgray h-[40rem] rounded relative">
                <img src="https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o=" alt="Pagoda of the Chin Swee Caves Temple in Malaysia" class="w-full h-full rounded object-cover">
            </figure>
            <aside class="flex flex-col gap-4">
                <figure class="bg-fadedgray h-[19.5rem] rounded relative">
                    <img src="https://media.gettyimages.com/id/487412885/photo/first-world-hotel-genting-highlands.jpg?s=612x612&w=0&k=20&c=NSkdM_yfhuPX9YS6phHTeWkKEOmyP37JkBSVkphFOlc=" alt="First World Hotel in Genting Highlands" class="w-full h-full rounded object-cover">
                </figure>
                <figure class="bg-fadedgray h-[19.5rem] rounded relative">
                    <img src="https://media.gettyimages.com/id/1436067704/photo/aerial-view-of-resorts-world-genting-malaysias-premier-integrated-resort-destination-and-the.jpg?s=612x612&w=0&k=20&c=curcsWzy1C7qizxqLsRkuoBemRldWvzw9zRLzB67XSU=" alt="Aerial view of Resorts World Genting, Malaysia's premier integrated resort destination" class="w-full h-full rounded object-cover">
                </figure>
            </aside>
        </main>

        <div class="px-5 flex justify-between items-center">
            <article class="text-paragraph p-4 bg-softwhite rounded">
                <p>LETS KYO TILL K.O</p>
            </article>
            <div class="flex items-center">
                <span class="text-xl font-bold mr-4">RM. 200,78</span>
                <button class="bg-softblack text-softwhite py-2 px-4 font-semibold rounded hover:bg-blue-800">
                    Save
                </button>
            </div>
        </div>
    </section>
  `,
})
export class purchase {}

@NgModule({
  declarations: [purchase],
  exports: [purchase],
  imports: [CommonModule, buttonwIconModule, ProgressBarComponentModule],
})
export class purchaseModule {}
