import { Component } from '@angular/core';
import { Sidebar } from '../sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'officer-layout',
  standalone: true,
  imports: [Sidebar, RouterOutlet],
  template: `
    <main class="flex flex-row">
      <div class="flex flex-shrink-0">
        <sidebar type="officer"></sidebar>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="w-full h-screen">
        <router-outlet></router-outlet>
      </div>
      <div class="w-12" id="spacer"></div>
    </main>
  `,
})
export class OfficerLayout {}
