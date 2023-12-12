import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar.component';

@Component({
  selector: 'customer-layout',
  standalone: true,
  imports: [Sidebar, RouterOutlet],
  template: `
    <main class="h-fit min-h-screen flex flex-row">
      <div class="flex flex-shrink-0">
        <sidebar id="sidebar" type="customer" class="sticky top-2"></sidebar>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="w-full min-h-screen max-h-fit">
        <router-outlet></router-outlet>
      </div>
      <div class="w-12" id="spacer"></div>
    </main>
  `,
})
export class CustomerLayout {}
