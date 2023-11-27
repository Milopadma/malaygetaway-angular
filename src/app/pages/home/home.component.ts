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
    <div class="flex flex-row h-full justify-center items-center">
      <div class="flex flex-col">
        <div class="flex flex-col text-subtitles">Home</div>
        <div class="flex flex-col text-titles">
          This Page is Under Construction
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
  navigateToNextPage() {
    this.router.navigate(['/merchant/home']);
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
