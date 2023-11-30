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
    <topnavbar class="sticky top-0 z-50"></topnavbar>
    <div class="flex flex-row h-full justify-center px-24 gap-64">
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
