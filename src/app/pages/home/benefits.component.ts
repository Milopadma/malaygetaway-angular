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

type Benefit = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'benefits',
  template: `
    <topnavbar class="sticky top-0 z-50" />
    <div class="h-32" id="spacer"></div>
    <div class="flex justify-center gap-32">
      <div>
        <div class="h-16" id="spacer"></div>
        <h1>Why choose <br />MalayGetaway?</h1>
        <div class="h-4" id="spacer"></div>
        <p>Discover the benefits of <br />listing your products with us.</p>
      </div>
      <div class="flex flex-col gap-32">
        @for (benefit of benefits; track benefit.title) {
        <div class="flex flex-col gap-4">
          <div>
            <img src="{{ benefit.image }}" alt="placeholder" />
          </div>
          <div class="flex flex-col">
            <h2>{{ benefit.title }}</h2>
            <p class="max-w-md">
              {{ benefit.description }}
            </p>
          </div>
        </div>
        }
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
        <div class="h-24" id="spacer"></div>
        <div class="flex flex-row justify-between">
          <div>
            <p>© 2023 MalayGetaway</p>
          </div>
          <div>
            <p>Powered by Coffee</p>
          </div>
        </div>
        <div class="h-8" id="spacer"></div>
      </div>
    </div>
  `,
})
export class Benefits {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  // placeholder data for now
  benefits = [
    {
      title: 'Wide Customer Reach',
      description:
        'Reach millions of potential customers looking for unique Malaysian experiences.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Easy Product Management',
      description:
        'Easily manage and update your product listings through our intuitive platform.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Secure Transactions',
      description:
        'Enjoy secure transactions with our trusted payment and escrow services.',
      image: 'https://via.placeholder.com/150',
    },
  ] as Benefit[];
}

@NgModule({
  declarations: [Benefits],
  exports: [Benefits],
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
export class BenefitsModule {}
