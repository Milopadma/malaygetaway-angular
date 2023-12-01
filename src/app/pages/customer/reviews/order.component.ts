import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarComponentModule } from '../../../components/form/progressbar.component';
import { buttonwIconModule } from '../../../components/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'order',
  template: `
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h1>Orders</h1>
          <h2>Submit a review for your past orders</h2>
          <div
            (click)="navButton1()"
            class="cursor-pointer border-2 border-transparent hover:border-fadedgray rounded-lg transition duration-300"
          >
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img
                  src="https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o="
                  alt="Genting Highlands"
                  class="h-14 w-14 rounded-full mr-3 object-cover"
                />
                <div class="flex flex-col">
                  <span class="font-bold text-lg text-gray-800"
                    >Genting Highlands</span
                  >
                  <span class="text-sm text-gray-500"
                    >Hill Station In Malaysia</span
                  >
                  <div class="flex items-center mt-2">
                    <span class="text-yellow-400 text-lg mr-1">4.6</span>
                    <span class="text-gray-600 text-sm ml-1"
                      >(5K+ Reviews)</span
                    >
                    <span class="flex items-center ml-2">
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-fadedgray"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="min-w-full border-b-2"></div>
          <br />
          <div
            (click)="navButton2()"
            class="cursor-pointer border-2 border-transparent hover:border-fadedgray rounded-lg transition duration-300"
          >
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/76/d5/e8/die-petronas-towers-sind.jpg?w=1200&h=1200&s=1"
                  alt="Genting Highlands"
                  class="h-14 w-14 rounded-full mr-3 object-cover"
                />
                <div class="flex flex-col">
                  <span class="font-bold text-lg text-gray-800"
                    >KL Tower Kuala Lumpur</span
                  >
                  <span class="text-sm text-gray-500">Petronas Twin Tower</span>
                  <div class="flex items-center mt-2">
                    <span class="text-yellow-400 text-lg mr-1">4.9</span>
                    <span class="text-gray-600 text-sm ml-1"
                      >(10K+ Reviews)</span
                    >
                    <span class="flex items-center ml-2">
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="min-w-full border-b-2"></div>
          <br />
          <div
            (click)="navButton3()"
            class="cursor-pointer border-2 border-transparent hover:border-fadedgray rounded-lg transition duration-300"
          >
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2019/08/02/1564725398383-e4d417ed431130adc24eaad17b3f6c7c.jpeg"
                  alt="Genting Highlands"
                  class="h-14 w-14 rounded-full mr-3 object-cover"
                />
                <div class="flex flex-col">
                  <span class="font-bold text-lg text-gray-800"
                    >Aquaria KLCC</span
                  >
                  <span class="text-sm text-gray-500"
                    >Kuala Lumpur Aquarium</span
                  >
                  <div class="flex items-center mt-2">
                    <span class="text-yellow-400 text-lg mr-1">4.5</span>
                    <span class="text-gray-600 text-sm ml-1"
                      >(3K+ Reviews)</span
                    >
                    <span class="flex items-center ml-2">
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                      <svg
                        class="w-5 h-5 text-fadedgray"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Orders {
  constructor(private router: Router) {}
  navButton1() {
    this.router.navigate(['reviewGenting']);
  }
  navButton2() {
    this.router.navigate(['reviewKL']);
  }
  navButton3() {
    this.router.navigate(['reviewAquaria']);
  }
}
@NgModule({
  declarations: [Orders],
  exports: [Orders],
  imports: [CommonModule, ProgressBarComponentModule, buttonwIconModule],
})
export class OrdersModule {}
