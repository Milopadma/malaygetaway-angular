import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from '../../components/form/fileinput.component';
import { SidebarModule } from '../sidebar.component';
@Component({
  selector: 'officer-layout',
  template: `
    <main>
      <sidebar></sidebar>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class OfficerLayout {}

@NgModule({
  declarations: [OfficerLayout],
  exports: [OfficerLayout],
  imports: [
    CommonModule,
    buttonwIconModule,
    ProgressBarComponentModule,
    RouterOutlet,
    FileInputComponentModule,
    SidebarModule,
  ],
})
export class OfficerLayoutModule {}
