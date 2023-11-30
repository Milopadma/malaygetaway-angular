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
  selector: 'about',
  template: `
    <topnavbar class="sticky top-0 z-50" />
    <div>
      <div>
        <h1>Why choose MalayGetaway?</h1>
        <p>Discover the benefits of listing your products with us.</p>
      </div>
      <div>
        <div>
          <div>
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </div>
          <div class="flex flex-col">
            <h2>Benefit 1</h2>
            <p>Benefit 1 description</p>
            <div class="flex flex-row">
              <small>label 1</small>
              <small>label 1</small>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  ],
})
export class AboutModule {}
