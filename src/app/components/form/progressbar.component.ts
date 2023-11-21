import { Component, Input, NgModule } from '@angular/core';
import { buttonwIconModule } from '../button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'progress-bar',
  template: `
    <div class="flex justify-between items-center">
      <div
        class="w-full flex-row border-t-2 border-gray-200 relative flex justify-between"
      >
        @for (label of labels; track label ){ @if (label == current) {

        <div
          class="-bottom-5 text-xs after:content-['*'] after:text-accent
            after:relative after:bottom-1/2 after:right-1/2 after:transform 
        "
        >
          {{ label }}
        </div>
        } @else {
        <div
          class="-bottom-5 text-xs after:content-['*'] 
            after:relative after:bottom-1/2 after:right-1/2 after:transform "
        >
          {{ label }}
        </div>
        } } @empty {
        <div class="relative">empty</div>
        }
      </div>
    </div>
  `,
})
export class progressbar {
  @Input() labels: string[] = [];
  @Input() current: string = '';
}

@NgModule({
  declarations: [progressbar],
  exports: [progressbar],
  imports: [CommonModule, buttonwIconModule],
})
export class ProgressBarComponentModule {}
