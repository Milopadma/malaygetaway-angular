import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../components/button.component';
import { ProgressBarComponentModule } from '../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
import { ButtonUnborderedModule } from '../components/buttonunbordered.component';
@Component({
  selector: 'sidebar',
  template: `
    <nav class="flex flex-col h-screen py-12 px-4 border-softblack border-r-[1px]">
      <div class="px-6 text-small">header</div>
      <div class="h-6" id="spacer"></div>
      <div class="flex flex-col justify-between h-screen">
        <div class="flex flex-col">
          <buttonunbordered label="Home"></buttonunbordered>
          <buttonunbordered label="View Applications"></buttonunbordered>
          <buttonunbordered label="View Reports"></buttonunbordered>
          <buttonunbordered label="Account"></buttonunbordered>
        </div>
        <div>
          <button class="px-6 text-paragraph text-reject">Logout</button>
        </div>
      </div>
    </nav>
  `,
})
export class Sidebar {}

@NgModule({
  declarations: [Sidebar],
  exports: [Sidebar],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    ButtonUnborderedModule,
  ],
})
export class SidebarModule {}
