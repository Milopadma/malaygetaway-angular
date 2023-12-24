import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../icon.component';
@Component({
  selector: 'fileinput',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="flex flex-row items-center">
      <label
        [for]="id"
        for="file-upload"
        class="group flex flex-col text-softblack text-2xl font-light leading-7 tracking-tighter border-softblack border-2 border-solid cursor-pointer items-center gap-3 px-9 py-12 hover:bg-softblack hover:text-white transition-all duration-200"
      >
        <div class="flex flex-row">
          {{ label }}
          <icon
            iconName="Upload"
            class="group-hover:invert transition-all duration-200"
          ></icon>
        </div>
        @if (previewUrl){
        <img
          [src]="previewUrl"
          alt="File Preview"
          class="object-cover w-24 h-24 rounded-md"
        />
        }
      </label>
      <input
        [id]="id"
        type="file"
        class="hidden"
        (change)="onFileChange($event)"
      />
    </div>
  `,
})
export class FileInputComponent {
  @Input() label!: string;
  @Output() fileChanged = new EventEmitter<File>();
  previewUrl: string | ArrayBuffer | null = null;

  id = `file-upload-${Math.random().toString(36).substr(2, 9)}`;

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      console.log(fileInput.files[0]);
      if (!validateFile(fileInput.files[0])) {
        this.fileChanged.emit(undefined);
        alert('Invalid file type or size');
        return;
      }

      this.fileChanged.emit(fileInput.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => (this.previewUrl = reader.result);
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}

// separate function to validate File Type and Size before uploading to backend
function validateFile(file: File): boolean {
  const validTypes = ['application/pdf'];
  const validSize = 1024 * 1024 * 5; // 5MB
  if (!validTypes.includes(file.type)) {
    return false;
  }
  if (file.size > validSize) {
    return false;
  }
  return true;
}
