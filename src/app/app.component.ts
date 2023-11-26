import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
    <div class="h-screen">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'malaygetaway-angular';
}
