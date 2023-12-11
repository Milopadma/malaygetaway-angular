import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { IconComponentModule } from '../icon.component';
@Component({
  selector: 'fileinput',
  template: `
    <div class="flex flex-row items-center">
      <label
        for="file-upload"
        class="group flex flex-row text-softblack text-2xl font-light leading-7 tracking-tighter border-softblack border-2 border-solid cursor-pointer items-center gap-3 px-9 py-12 hover:bg-softblack hover:text-white transition-all duration-200"
      >
        {{ label }}
        <icon
          iconName="Upload"
          class="group-hover:invert transition-all duration-200"
        ></icon>
      </label>
      <input
        id="file-upload"
        type="file"
        class="hidden"
        (change)="onFileChange($event)"
      />
      <img *ngIf="previewUrl" [src]="previewUrl" alt="File Preview" />
    </div>
  `,
})
export class FileInputComponent {
  @Input() label!: string;
  @Output() fileChanged = new EventEmitter<FileList>();
  previewUrl: string | ArrayBuffer | null = null;

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.fileChanged.emit(fileInput.files);
      const reader = new FileReader();
      reader.onload = (e) => (this.previewUrl = reader.result);
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
@NgModule({
  declarations: [FileInputComponent],
  exports: [FileInputComponent],
  imports: [CommonModule, IconComponentModule],
})
export class FileInputComponentModule {}
