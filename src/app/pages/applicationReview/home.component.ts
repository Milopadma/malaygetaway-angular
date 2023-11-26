import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
@Component({
  selector: 'officer-home',
  template: `
    <div id="spacer" class="h-64"></div>
    <div class="flex flex-col">
      <h1 class="text-zinc-800 text-titles leading-10 tracking-tighter">
        home
      </h1>
    </div>
  `,
})
export class OfficerHomeComponent {
}

@NgModule({
  declarations: [OfficerHomeComponent],
  exports: [OfficerHomeComponent],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
  ],
})
export class OfficerApplicationsComponentModule {}
