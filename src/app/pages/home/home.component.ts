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
      <div class="flex flex-col items-center">
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
              >Discover a wide range of services offered <br>by the best local
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
