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
import { FooterModule } from './footer.component';
@Component({
  selector: 'about',
  template: `
    <topnavbar class="sticky top-0 z-50" />
    <div class="flex flex-col justify-center items-center ">
      <div class="h-16" id="spacer"></div>
      <h1>About Us</h1>
      <div class="h-4" id="spacer"></div>
      <p class="max-w-xl">
        MalayGetaway is a platform for local businesses to list their products
        and services. We aim to promote local businesses and encourage
        Malaysians to support local products and services.
      </p>
    </div>
    <app-footer></app-footer>
  `,
})
export class About {
  constructor(private router: Router) {}
  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}

@NgModule({
  declarations: [About],
  exports: [About],
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
    FooterModule,
  ],
})
export class AboutModule {}
