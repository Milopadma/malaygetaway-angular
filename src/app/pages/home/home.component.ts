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
@Component({
  selector: 'home',
  template: `
    <div class="flex flex-row h-full justify-center items-center px-48">
      <div>
        <div class="flex flex-col">
          <div class="flex flex-col text-subtitles">Home</div>
          <div class="flex flex-col text-titles">
            This Page is a placeholder, for now, it only displays the major UI
            flows starting points.
          </div>
        </div>
        <div class="h-12"></div>
        <div class="flex flex-col gap-12">
          <div>
            <button
              class="text-small underline flex flex-row items-center gap-2"
              (click)="navigateToPage('/merchant/register')"
            >
              > Merchant Registration Flow
            </button>
          </div>
          <div>
            <button
              class="text-small underline flex flex-row items-center gap-2"
              (click)="navigateToPage('/officer')"
            >
              > Officer Application Review Flow
            </button>
          </div>
          <div>
            <button
              class="text-small underline flex flex-row items-center gap-2"
              (click)="navigateToPage('/login')"
            >
              > Merchant Manage Tourism Products Flow
            </button>
          </div>
        </div>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="">
        <!-- placeholder image -->
        <img src="https://via.placeholder.com/600x600" />
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
  ],
})
export class HomeModule {}
