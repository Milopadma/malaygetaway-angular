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
        @for (label of labels; track label ){
        <div
          class="absolute top-0 left-0 before:content-['•'] before:text-blue-500 before:opacity-50 before:animate-pulse"
        ></div>
        <div
          class="-top-1.5 w-3 h-3 bg-gray-300 rounded-full"
          [class.bg-green-500]="current === label"
        ></div>
        <div class="-bottom-5 text-xs">{{ label }}</div>
        } @empty {
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
