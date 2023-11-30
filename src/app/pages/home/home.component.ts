import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
import { ButtonUnborderedModule } from '../../components/buttonunbordered.component';
import { ButtonNoIconModule } from '../../components/buttonnoicon.component';
import { IconComponentModule } from '../../components/icon.component';
import { DialogueBoxModule } from '../../components/dialoguebox.component';
import { TopNavbarModule } from '../../components/topnavbar.component';
import { ButtonBorderedModule } from '../../components/buttonbordered.component';
@Component({
  selector: 'home',
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
              class="text-paragraph border border-softblack p-2 py-4"
              type="text"
              placeholder="Search for products or services"
            />
            <buttonbordered
              label="Search"
              class="flex flex-grow-0 self-end"
            ></buttonbordered>
          </form>
        </div>
        <div>
          <div class="h-48" id="spacer"></div>
          <img src="https://via.placeholder.com/500x500" alt="placeholder" />
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
            <div class="flex flex-row">
              <buttonunbordered label="Browse Categories"></buttonunbordered>
              <buttonbordered label="View All Services"></buttonbordered>
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
          <div class="flex flex-row">
            <buttonunbordered label="View All Reviews"></buttonunbordered>
            <buttonbordered label="Write a Review"></buttonbordered>
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
              <div class="flex flex-row">
                <buttonunbordered label="View All Merchants"></buttonunbordered>
                <buttonbordered label="Become a Merchant"></buttonbordered>
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
    <div class="h-64" id="spacer"></div>
    <!-- footer -->
    <div class="flex flex-col items-center justify-center">
      <div>
        <div class="flex flex-row gap-8">
          <div>
            <h1>Discover Malaysia</h1>
            <div class="h-4" id="spacer"></div>
            <p>
              Discover the best local products and services Malaysia has to
              offer.
            </p>
          </div>
          <div>
            <h1>Explore</h1>
            <div class="h-4" id="spacer"></div>
            <p>Home</p>
            <p>Benefits</p>
            <p>About</p>
          </div>
          <div>
            <h1>Legal</h1>
            <div class="h-4" id="spacer"></div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h1>Connect</h1>
            <div class="h-4" id="spacer"></div>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div class="h-4" id="spacer"></div>
        <div class="flex flex-row justify-between">
          <div>
            <p>© 2023 MalayGetaway</p>
          </div>
          <div>
            <p>Powered by Coffee</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Home {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}

@NgModule({
  declarations: [Home],
  exports: [Home],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    ButtonUnborderedModule,
    ButtonNoIconModule,
    IconComponentModule,
    DialogueBoxModule,
    TopNavbarModule,
    ButtonBorderedModule,
  ],
})
export class HomeModule {}
