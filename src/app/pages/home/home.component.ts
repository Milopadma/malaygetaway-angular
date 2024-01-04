import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopNavbar } from '../../components/topnavbar.component';
import { ButtonBordered } from '../../components/buttonbordered.component';
import { ButtonUnbordered } from '../../components/buttonunbordered.component';
import { Footer } from './footer.component';
import { ApiService } from '../../api/api.service';
import { MerchantData, Product } from '../../types';

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
          <div class="flex flex-col items-center ">
            <img
              src="https://media.istockphoto.com/id/509105016/id/foto/cakrawala-kuala-lumpur.jpg?s=612x612&w=0&k=20&c=IoUHv7s0LuQMYThjU6CBZWt8jcquD2aHrHpkwRjZTZY%3D"
              alt="Kuala Lumpur"
              class="object-cover w-48 h-48"
            />
            <div class="flex flex-col items-start">
              <div class="h-4" id="spacer"></div>
              <span class="text-subtitles">KL Sightseeing</span>
              <div class="h-4" id="spacer"></div>
              <span class="text-paragraph">RM 99</span>
            </div>
          </div>
          <div class="flex flex-col items-center ">
            <img
              src="https://a.cdn-hotels.com/gdcs/production21/d1970/9c3d0821-6328-4831-a57d-508b5fb37359.jpg"
              alt="Genting Highlands"
              class="object-cover w-48 h-48"
            />
            <div class="flex flex-col items-start">
              <div class="h-4" id="spacer"></div>
              <span class="text-subtitles">Genting Highlands Tour</span>
              <div class="h-4" id="spacer"></div>
              <span class="text-paragraph">RM 49</span>
            </div>
          </div>
          <div class="flex flex-col items-center ">
            <img
              src="https://asset.kompas.com/data/photo/2013/11/14/1543116alor-2780x390.jpg"
              alt="Alor Feastery"
              class="object-cover w-48 h-48"
            />
            <div class="flex flex-col items-start">
              <div class="h-4" id="spacer"></div>
              <span class="text-subtitles">Alor Feastery</span>
              <div class="h-4" id="spacer"></div>
              <span class="text-paragraph">RM 29</span>
            </div>
          </div>
        </div>
        <div class="h-64" id="spacer"></div>
        <!-- explore our services section-->
        <div class="flex flex-row gap-8">
          <div class="w-80 h-[800px] overflow-hidden">
            <img
              src="https://www.worldatlas.com/r/w1200/upload/13/df/17/shutterstock-421599898.jpg"
              alt=""
              class="object-cover w-full h-full"
            />
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
              <div class="flex flex-row flex-wrap gap-4">
                <div class="flex flex-row gap-4">
                  <div class="w-48 h-48 overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/509105016/id/foto/cakrawala-kuala-lumpur.jpg?s=612x612&w=0&k=20&c=IoUHv7s0LuQMYThjU6CBZWt8jcquD2aHrHpkwRjZTZY%3D"
                      alt="Scenic view of Kuala Lumpur"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 class="text-subtitles">Kuala Lumpur Sightseeing</h2>
                    <span class="text-small text-softblack"
                      >Explore the city</span
                    >
                    <div class="text-small text-softgray">
                      Discover the beauty of Kuala Lumpur with our sightseeing
                      service.
                    </div>
                    <span class="text-small text-fadedgray">City Tour</span>
                    <span class="text-small text-fadedgray">Guided Tour</span>
                    <div class="flex flex-row">
                      <span>Offered by TravelCo</span>
                      <div>
                        <!-- icons -->
                        💡
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-row gap-4">
                  <div class="w-48 h-48 overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/509105016/id/foto/cakrawala-kuala-lumpur.jpg?s=612x612&w=0&k=20&c=IoUHv7s0LuQMYThjU6CBZWt8jcquD2aHrHpkwRjZTZY%3D"
                      alt="Scenic view of Kuala Lumpur"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 class="text-subtitles">Kuala Lumpur Sightseeing</h2>
                    <span class="text-small text-softblack"
                      >Explore the city</span
                    >
                    <div class="text-small text-softgray">
                      Discover the beauty of Kuala Lumpur with our sightseeing
                      service.
                    </div>
                    <span class="text-small text-fadedgray">City Tour</span>
                    <span class="text-small text-fadedgray">Guided Tour</span>
                    <div class="flex flex-row">
                      <span>Offered by TravelCo</span>
                      <div>
                        <!-- icons -->
                        💡
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-row gap-4">
                  <div class="w-48 h-48 overflow-hidden">
                    <img
                      src="https://media.istockphoto.com/id/509105016/id/foto/cakrawala-kuala-lumpur.jpg?s=612x612&w=0&k=20&c=IoUHv7s0LuQMYThjU6CBZWt8jcquD2aHrHpkwRjZTZY%3D"
                      alt="Scenic view of Kuala Lumpur"
                      class="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 class="text-subtitles">Kuala Lumpur Sightseeing</h2>
                    <span class="text-small text-softblack"
                      >Explore the city</span
                    >
                    <div class="text-small text-softgray">
                      Discover the beauty of Kuala Lumpur with our sightseeing
                      service.
                    </div>
                    <span class="text-small text-fadedgray">City Tour</span>
                    <span class="text-small text-fadedgray">Guided Tour</span>
                    <div class="flex flex-row">
                      <span>Offered by TravelCo</span>
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
          <div class="h-64" id="spacer"></div>
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
                <div class="w-48 h-48">
                  <img
                    src="https://www.realfakephotos.com/_next/image?url=/_next/static/media/Gregor-Zunic.cf1521fb.png&w=1080&q=75"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col items-start">
                  <div class="h-4" id="spacer"></div>
                  <span class="text-subtitles">Jackie Wang</span>
                  <div class="h-4" id="spacer"></div>
                </div>
                <span class="text-paragraph">"I love this product"</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-48 h-48">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBofXJ9a6WcQsHXvSZ2zdGuEaU76Xsp7z6mw&usqp=CAU"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col items-start">
                  <div class="h-4" id="spacer"></div>
                  <span class="text-subtitles">Hyung Dann</span>
                  <div class="h-4" id="spacer"></div>
                </div>
                <span class="text-paragraph">"Very nice and smooth"</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-48 h-48">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIi5rCTcmIlDvBhEUzGX1a36gT2nlalS2hA&usqp=CAU"
                    alt=""
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col items-start">
                  <div class="h-4" id="spacer"></div>
                  <span class="text-subtitles">Carlos Huegh</span>
                  <div class="h-4" id="spacer"></div>
                  <span class="text-paragraph">"Amazing"</span>
                </div>
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
                <div class="flex flex-col gap-8">
                  <div class="flex flex-col justify-between gap-4">
                    <div class="flex flex-row gap-4">
                      <img
                        class="object-contain"
                        src="https://via.placeholder.com/50x50"
                        alt=""
                      />
                      <div class="flex flex-col">
                        <h2>Explore Malaysia</h2>
                        <small>Uncover the wonders of a diverse nation</small>
                      </div>
                    </div>
                    <p>
                      Embark on a journey to discover the rich culture,
                      breathtaking landscapes, and hidden treasures of Malaysia.
                    </p>
                  </div>
                  <div class="flex flex-col justify-between gap-4">
                    <div class="flex flex-row gap-4">
                      <img
                        class="object-contain"
                        src="https://via.placeholder.com/50x50"
                        alt=""
                      />
                      <div class="flex flex-col">
                        <h2>Adventure Seekers</h2>
                        <small>Embark on thrilling expeditions</small>
                      </div>
                    </div>
                    <p>
                      Experience adrenaline-pumping adventures and explore the
                      wonders of Malaysia.
                    </p>
                  </div>
                  <div class="flex flex-col justify-between gap-4">
                    <div class="flex flex-row gap-4">
                      <img
                        class="object-contain"
                        src="https://via.placeholder.com/50x50"
                        alt=""
                      />
                      <div class="flex flex-col">
                        <h2>Malay Getaway Tours</h2>
                        <small>Explore Malaysia's hidden gems</small>
                      </div>
                    </div>
                    <p>
                      Discover the beauty and culture of Malaysia through our
                      guided tours.
                    </p>
                  </div>
                </div>
              </div>
              <div class="h-[900px] w-[320px]">
                <img
                  class="object-cover w-full h-full"
                  src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/05/02/626f4a58c58e8-kuala-lumpur-malaysia_665_374.jpg"
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
    </div>
  `,
})
export class Home {
  constructor(private router: Router, private apiService: ApiService) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  featuredProducts: Product[] = [];
  customerReviews: any[] = [];
  featuredMerchants: MerchantData[] = [];
}
