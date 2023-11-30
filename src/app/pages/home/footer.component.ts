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
  selector: 'app-footer',
  template: `
    <div class="h-64" id="spacer"></div>
    <!-- footer -->
    <div class="flex flex-col items-center justify-center w-full">
      <div>
        <div class="flex flex-row gap-32">
          <div>
            <h1>Discover Malaysia</h1>
            <div class="h-4" id="spacer"></div>
            <p>
              Discover the best local products and services <br />Malaysia has
              to offer.
            </p>
          </div>
          <div>
            <h1>Explore</h1>
            <div class="h-4" id="spacer"></div>
            <p class="hover:underline cursor-pointer" (click)="navigateToPage('home')">Home</p>
            <p class="hover:underline cursor-pointer" (click)="navigateToPage('benefits')">Benefits</p>
            <p class="hover:underline cursor-pointer" (click)="navigateToPage('about')">About Us</p>
          </div>
          <div>
            <h1>Legal</h1>
            <div class="h-4" id="spacer"></div>
            <p class="hover:underline cursor-pointer" (click)="navigateToPage('terms')">Terms & Conditions</p>
            <p class="hover:underline cursor-pointer" (click)="navigateToPage('privacy')">Privacy Policy</p>
          </div>
          <div class="flex flex-col">
            <h1>Connect</h1>
            <div class="h-4" id="spacer"></div>
            <a class="hover:underline cursor-pointer text-paragraph" href="https://instagram.com">Instagram</a>
            <a class="hover:underline cursor-pointer text-paragraph" href="https://linkedin.com">LinkedIn</a>
            <a class="hover:underline cursor-pointer text-paragraph" href="https://X.com">X</a>
          </div>
        </div>
        <div class="h-24" id="spacer"></div>
        <div class="flex flex-row justify-between">
          <div>
            <p>© 2023 MalayGetaway</p>
          </div>
          <div>
            <p>Powered by ☕</p>
          </div>
        </div>
        <div class="h-8" id="spacer"></div>
      </div>
    </div>
  `,
})
export class Footer {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}

@NgModule({
  declarations: [Footer],
  exports: [Footer],
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
export class FooterModule {}
