import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
import { SidebarModule } from '../sidebar.component';
@Component({
  selector: 'customer-layout',
  template: `
    <main class="flex flex-row">
      <div class="flex flex-shrink-0">
        <sidebar type="customer"></sidebar>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="w-full h-screen">
        <router-outlet></router-outlet>
      </div>
      <div class="w-12" id="spacer"></div>
    </main>
  `,
})
export class CustomerLayout {}

@NgModule({
  declarations: [CustomerLayout],
  exports: [CustomerLayout],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    SidebarModule,
  ],
})
export class CustomerLayoutModule {}
