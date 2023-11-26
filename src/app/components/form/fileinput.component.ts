import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { IconComponentModule } from '../icon.component';

@Component({
  selector: 'fileinput',
  template: `
    <div class="flex flex-row items-center">
      <label
        for="file-upload"
        class="flex flex-row text-softblack text-2xl font-light leading-7 tracking-tighter border-softblack border-2 border-solid cursor-pointer items-center gap-3 px-9 py-12"
      >
        {{ label }}
        <icon iconName="Upload"></icon>
      </label>
      <input id="file-upload" type="file" class="hidden" />
    </div>
  `,
})
export class FileInputComponent {
  @Input() label!: string;
}
@NgModule({
  declarations: [FileInputComponent],
  exports: [FileInputComponent],
  imports: [CommonModule, IconComponentModule],
})
export class FileInputComponentModule {}
