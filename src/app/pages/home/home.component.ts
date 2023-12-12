import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavbar } from '../../components/topnavbar.component';
import { ButtonBordered } from '../../components/buttonbordered.component';
import { ButtonUnbordered } from '../../components/buttonunbordered.component';
import { Footer } from './footer.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [TopNavbar, ButtonBordered, ButtonUnbordered, Footer],
  template: `
    <topnavbar class="sticky top-0 z-50" />
    <div>
      <!-- hero section -->
      <div class="flex flex-row justify-center px-24 gap-64">
        <div>
          <div class="h-64" id="spacer"></div>
          <h1 class="text-titles">Discover Malaysia</h1>
          <div class="h-4" id="spacer"></div>
          <span class="text-subtitles">
            Explore the best local products and services <br />
            Malaysia has to offer.
          </span>
          <div class="h-12" id="spacer"></div>
          <form class="flex flex-col gap-4">
            <input
              class="text-paragraph border-black border-2 p-2 py-4"
              type="text"
              placeholder="Search for products or services"
            />
            <buttonbordered
              (click)="navigateToPage('customer/home')"
              label="Search"
              class="flex flex-grow-0 self-end"
            ></buttonbordered>
          </form>
        </div>
        <div>
          <div class="h-48" id="spacer"></div>
          <img
            src="../../assets/petronastwintowers.webp"
            alt=""
            class="w-auto"
          />
        </div>
      </div>
      <div class="h-64" id="spacer"></div>
      <!-- featured products section -->
      <div class="flex flex-col items-center px-24">
        <div class="h-12" id="spacer"></div>
        <h1 class="text-titles">Featured Products</h1>
        <div class="h-4" id="spacer"></div>
        <span class="text-subtitles">
          Explore the best local products and services <br />
          Malaysia has to offer.
        </span>
        <div class="h-12" id="spacer"></div>
        <div class="flex flex-row gap-12">
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/500x500" alt="placeholder" />
            <div class="h-4" id="spacer"></div>
            <span class="text-subtitles">Product 1</span>
            <div class="h-4" id="spacer"></div>
            <span class="text-paragraph">RM 100</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/500x500" alt="placeholder" />
            <div class="h-4" id="spacer"></div>
            <span class="text-subtitles">Product 2</span>
            <div class="h-4" id="spacer"></div>
            <span class="text-paragraph">RM 100</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://via.placeholder.com/500x500" alt="placeholder" />
            <div class="h-4" id="spacer"></div>
            <span class="text-subtitles">Product 3</span>
            <div class="h-4" id="spacer"></div>
            <span class="text-paragraph">RM 100</span>
          </div>
        </div>
        <div class="h-64" id="spacer"></div>
        <!-- explore our services section-->
        <div class="flex flex-row gap-8">
          <div>
            <img src="https://via.placeholder.com/400x800" alt="" />
          </div>
          <div class="flex flex-col">
            <h1 class="text-titles">Explore our services</h1>
            <div class="h-4" id="spacer"></div>
            <span class="text-subtitles"
              >Discover a wide range of services offered <br />by the best local
              Malaysian merchants.</span
            >
            <div class="h-4" id="spacer"></div>
            <div class="flex flex-row gap-4">
              <buttonunbordered
                label="Browse Categories (placeholder)"
              ></buttonunbordered>
              <buttonbordered
                label="View All Services"
                (click)="navigateToPage('customer/home')"
              ></buttonbordered>
            </div>
            <div class="h-12" id="spacer"></div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row gap-4">
                <img src="https://via.placeholder.com/200x200" alt="" />
                <div>
                  <h2 class="text-subtitles">Service 1</h2>
                  <span class="text-small text-softblack">subtitle 1</span>
                  <div class="text-small text-softgray">description</div>
                  <span class="text-small text-fadedgray">label 1</span>
                  <span class="text-small text-fadedgray">label 1</span>
                  <div class="flex flex-row">
                    <span>merchant 1</span>
                    <div>
                      <!-- icons -->
                      💡
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row gap-4">
                <img src="https://via.placeholder.com/200x200" alt="" />
                <div>
                  <h2 class="text-subtitles">Service 1</h2>
                  <span class="text-small text-softblack">subtitle 1</span>
                  <div class="text-small text-softgray">description</div>
                  <span class="text-small text-fadedgray">label 1</span>
                  <span class="text-small text-fadedgray">label 1</span>
                  <div class="flex flex-row">
                    <span>merchant 1</span>
                    <div>
                      <!-- icons -->
                      💡
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row gap-4">
                <img src="https://via.placeholder.com/200x200" alt="" />
                <div>
                  <h2 class="text-subtitles">Service 1</h2>
                  <span class="text-small text-softblack">subtitle 1</span>
                  <div class="text-small text-softgray">description</div>
                  <span class="text-small text-fadedgray">label 1</span>
                  <span class="text-small text-fadedgray">label 1</span>
                  <div class="flex flex-row">
                    <span>merchant 1</span>
                    <div>
                      <!-- icons -->
                      💡
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-64" id="spacer"></div>
      </div>
      <!-- customer review section -->
      <div>
        <div class="flex flex-col items-center">
          <h1>Customer Reviews</h1>
          <div class="h-4" id="spacer"></div>
          <span class="text-subtitles">
            See what our customers have to say about their experiences
          </span>
          <div class="h-4" id="spacer"></div>
          <div class="flex flex-row gap-4">
            <buttonunbordered
              label="View All Reviews (placeholder)"
            ></buttonunbordered>
            <buttonbordered
              label="Write a Review"
              (click)="navigateToPage('customer/pastorders')"
            ></buttonbordered>
          </div>
          <div class="h-12" id="spacer"></div>
          <div class="flex flex-row gap-12">
            <div class="flex flex-col items-center">
              <img src="https://via.placeholder.com/200x200" alt="" />
              <div class="h-4" id="spacer"></div>
              <span class="text-subtitles">Customer 1</span>
              <div class="h-4" id="spacer"></div>
              <span class="text-paragraph">"I love this product"</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://via.placeholder.com/200x200" alt="" />
              <div class="h-4" id="spacer"></div>
              <span class="text-subtitles">Customer 2</span>
              <div class="h-4" id="spacer"></div>
              <span class="text-paragraph">"I love this product"</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://via.placeholder.com/200x200" alt="" />
              <div class="h-4" id="spacer"></div>
              <span class="text-subtitles">Customer 3</span>
              <div class="h-4" id="spacer"></div>
              <span class="text-paragraph">"I love this product"</span>
            </div>
          </div>
          <div class="h-64" id="spacer"></div>
        </div>
        <div>
          <!-- featured Merchants -->
          <div class="flex flex-row gap-8 justify-center">
            <div>
              <h1>Featured Merchants</h1>
              <div class="h-4" id="spacer"></div>
              <p>Discover the best local merchants in Malaysia</p>
              <div class="h-4" id="spacer"></div>
              <div class="flex flex-row gap-4">
                <buttonunbordered
                  label="View All Merchants (placeholder)"
                ></buttonunbordered>
                <buttonbordered
                  label="Become a Merchant"
                  (click)="navigateToPage('merchant/register')"
                ></buttonbordered>
              </div>
              <div class="h-12" id="spacer"></div>
              <div>
                <div class="flex flex-row justify-between gap-4">
                  <div class="flex flex-row gap-4">
                    <img
                      class="object-contain"
                      src="https://via.placeholder.com/50x50"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <h2>Merchant 1</h2>
                      <small>subtitle 1</small>
                    </div>
                  </div>
                  <p>description</p>
                </div>
                <div class="flex flex-row justify-between gap-4">
                  <div class="flex flex-row gap-4">
                    <img
                      class="object-contain"
                      src="https://via.placeholder.com/50x50"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <h2>Merchant 1</h2>
                      <small>subtitle 1</small>
                    </div>
                  </div>
                  <p>description</p>
                </div>
                <div class="flex flex-row justify-between gap-4">
                  <div class="flex flex-row gap-4">
                    <img
                      class="object-contain"
                      src="https://via.placeholder.com/50x50"
                      alt=""
                    />
                    <div class="flex flex-col">
                      <h2>Merchant 1</h2>
                      <small>subtitle 1</small>
                    </div>
                  </div>
                  <p>description</p>
                </div>
              </div>
            </div>
            <div>
              <img
                class="object-contain"
                src="https://via.placeholder.com/400x800"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="h-64" id="spacer"></div>
    </div>
    <!-- get in touch section -->
    <div class="flex flex-col items-center justify-center">
      <div>
        <h1>Get in touch</h1>
        <div class="h-4" id="spacer"></div>
        <p>Contact us for any inquiries or feedback</p>
        <form action="" class="flex flex-col gap-4">
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
            placeholder="name"
          />
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] max-w-full mt-4 px-5 py-2 border-2 border-solid max-md:pl-1"
            placeholder="email"
          />
          <input
            type="text"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] max-w-full mt-4 px-5 py-2 border-2 border-solid"
            placeholder="message"
          />
          <div class="h-4" id="spacer"></div>
          <buttonbordered
            label="Send Message"
            class="flex grow-0 self-end"
          ></buttonbordered>
        </form>
      </div>
    </div>
    <app-footer></app-footer>
  `,
})
export class Home {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
