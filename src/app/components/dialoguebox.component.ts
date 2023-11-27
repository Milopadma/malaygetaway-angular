import {
  Component,
  Input,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBorderedModule } from './buttonbordered.component';

@Component({
  selector: 'dialogue-box',
  template: `
    <div
      class="fixed inset-0 flex items-center justify-center z-50"
      (click)="onOutsideClick()"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div
        class="bg-white h-1/3 w-5/12 shadow-lg text-left relative z-10"
        (click)="$event.stopPropagation()"
      >
        <div class="p-12">
          <h2 class="text-small">{{ header }}</h2>
          <p class="text-subtitles">{{ content }}</p>
          <div class="h-12" id="spacer"></div>
          <div class="flex justify-between">
            <buttonbordered
              label="{{ button1 }}"
              (click)="onFirstButtonClick()"
            ></buttonbordered>
            <buttonbordered
              label="{{ button2 }}"
              (click)="onSecondButtonClick()"
            ></buttonbordered>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DialogueBoxComponent {
  @Input() header!: string;
  @Input() content!: string;
  @Input() button1!: string;
  @Input() button2!: string;
  @Output() close = new EventEmitter<void>();
  @Output() firstButtonClicked = new EventEmitter<void>();
  @Output() secondButtonClicked = new EventEmitter<void>();

  onFirstButtonClick() {
    this.close.emit();
  }

  onSecondButtonClick() {
    this.secondButtonClicked.emit();
  }

  onOutsideClick() {
    this.close.emit();
  }
}

@NgModule({
  declarations: [DialogueBoxComponent],
  exports: [DialogueBoxComponent],
  imports: [CommonModule, ButtonBorderedModule],
})
export class DialogueBoxModule {}
