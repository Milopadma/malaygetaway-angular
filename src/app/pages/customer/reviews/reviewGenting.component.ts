import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../../api/review.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'review-genting',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  template: `
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <br />
          <h2 class="text-titles font-bold mb-10">Review</h2>
          <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <img
                  src="https://media.gettyimages.com/id/565233223/photo/pagoda-of-the-chin-swee-caves-temple-malaysia.jpg?s=612x612&w=0&k=20&c=i7TBrIafjyK8AnAXt_aYinaKBONtu_NLuVxpq4DqQ8o="
                  alt="Pagoda of the Chin Swee Caves Temple in Malaysia"
                  class="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                  alt="Genting Highlands"
                  class="h-14 w-14 rounded-full mr-3"
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

            <div class="border-t border-gray-200 pt-7 max-w-fit">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Write a Review
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div class="bg-gray-100 p-7 rounded-lg">
                  <div class="flex flex-col items-start mb-1">
                    <div class="flex items-center mb-2">
                      <span
                        class="text-softblack text-paragraph ml-2 mr-2 font-bold"
                        >Reviews</span
                      >
                      <span class="text-yellow-400 text-lg mr-1">4.6</span>
                      <span class="flex items-center">
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
                    <span class="text-sm text-gray-500 ml-2">5,427 Total</span>
                    <br />
                    <div class="flex items-center">
                      <span
                        class="text-softblack text-small font-semibold ml-2 w-[8rem] "
                        >Order</span
                      >
                      <span class="flex">
                        <ng-container
                          *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
                        >
                          <svg
                            (click)="setRating(i + 1)"
                            [ngClass]="
                              i < rating1 ? 'text-yellow-500' : 'text-gray-400'
                            "
                            class="w-6 h-5 cursor-pointer"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                            />
                          </svg>
                        </ng-container>
                      </span>
                    </div>
                    <br />
                    <div class="flex items-center">
                      <span
                        class="text-softblack text-small font-semibold ml-2 w-[8rem]"
                        >Service</span
                      >
                      <span class="flex">
                        <ng-container
                          *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
                        >
                          <svg
                            (click)="setRating2(i + 1)"
                            [ngClass]="
                              i < rating2 ? 'text-yellow-500' : 'text-gray-400'
                            "
                            class="w-6 h-5 cursor-pointer"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                            />
                          </svg>
                        </ng-container>
                      </span>
                    </div>
                    <br />
                    <div class="flex items-center">
                      <span
                        class="text-softblack text-small font-semibold ml-2 w-[8rem]"
                        >Price</span
                      >
                      <span class="flex">
                        <ng-container
                          *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
                        >
                          <svg
                            (click)="setRating3(i + 1)"
                            [ngClass]="
                              i < rating3 ? 'text-yellow-500' : 'text-gray-400'
                            "
                            class="w-6 h-5 cursor-pointer"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                            />
                          </svg>
                        </ng-container>
                      </span>
                    </div>
                    <br />
                    <div class="flex items-center">
                      <span
                        class="text-softblack text-small font-semibold ml-2 w-[8rem]"
                        >Place</span
                      >
                      <span class="flex">
                        <ng-container
                          *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
                        >
                          <svg
                            (click)="setRating4(i + 1)"
                            [ngClass]="
                              i < rating4 ? 'text-yellow-500' : 'text-gray-400'
                            "
                            class="w-6 h-5 cursor-pointer"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                            />
                          </svg>
                        </ng-container>
                      </span>
                    </div>
                    <br />
                    <div class="flex items-center">
                      <span
                        class="text-softblack text-small font-semibold ml-2 w-[8rem]"
                        >Overall</span
                      >
                      <span class="flex">
                        <ng-container
                          *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
                        >
                          <svg
                            (click)="setRating5(i + 1)"
                            [ngClass]="
                              i < rating5 ? 'text-yellow-500' : 'text-gray-400'
                            "
                            class="w-6 h-5 cursor-pointer"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.049 15L5.172 17.09l0.857-4.987-3.617-3.527 4.998-0.727L9.049 3l2.238 4.85 4.998 0.727-3.617 3.527 0.857 4.987-3.877-2.09z"
                            />
                          </svg>
                        </ng-container>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                <form (submit)="navigateTosend()">
                    <div class="grid gap-6 mb-1 lg:grid-cols-2">
                      <div>
                        <label for="name" class="block mb-2 text-small font-medium text-softblack">Name</label>
                        <input
                          type="text"
                          id="name"
                          (input)="updateReviewData('name', $event)"
                          placeholder="Your Name"
                          class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required
                        />
                      </div>
                      <div>
                        <label for="email" class="block mb-1 text-small font-medium text-softblack">Email</label>
                        <input
                          type="email"
                          id="email"
                          (input)="updateReviewData('email', $event)"
                          placeholder="Email"
                          class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          required
                        />
                      </div>
                    </div>
                    <div class="mb-1">
                      <label for="product" class="block mb-1 text-small font-medium text-softblack">Product</label>
                      <input
                        type="text"
                        id="product"
                        (input)="updateReviewData('product', $event)"
                        placeholder="What service or product did you buy?"
                        class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      />
                    </div>

                    <div class="mb-1">
                      <label for="description" class="block mb-1 text-small font-medium text-softblack">Description</label>
                      <textarea
                        id="description"
                        (input)="updateReviewData('description', $event)"
                        placeholder="Write your review here"
                        class="bg-white border border-fadedgray text-softblack text-small rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                      ></textarea>
                    </div>
                    <div class="flex justify-start md:justify-end">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-softblack hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Send
                      </button>
                      <button
                        (click)="navButton2()"
                        type="button"
                        class="ml-4 inline-flex justify-center py-2 px-4 mt-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class reviewGenting {
  reviewData = {
    name: '',
    email: '',
    product: '',
    description: '',
  };

  isSubmitting = false;

  constructor(private router: Router, private reviewService: ReviewService) {}

  navigateTosend() {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    this.reviewService.createReview(this.reviewData)
      .subscribe(
        (response) => {
          this.router.navigate(['customer/review/sent']);
          this.isSubmitting = false;
        },
        (error) => {
          console.error('Error when saving review:', error.message);
          this.isSubmitting = false;
        }
      );
  }
  
  
  updateReviewData(field: keyof reviewGenting['reviewData'], event: Event) {
    const input = event.target as HTMLInputElement;
    this.reviewData[field] = input.value;
  }
  
  
  rating1 = 0;
  rating2 = 0;
  rating3 = 0;
  rating4 = 0;
  rating5 = 0;
  setRating(newRating: number) {
    this.rating1 = newRating;
  }
  setRating2(newRating: number) {
    this.rating2 = newRating;
  }
  setRating3(newRating: number) {
    this.rating3 = newRating;
  }
  setRating4(newRating: number) {
    this.rating4 = newRating;
  }
  setRating5(newRating: number) {
    this.rating5 = newRating;
  }
  navButton2() {
    this.router.navigate(['customer/home']);
  }
}
