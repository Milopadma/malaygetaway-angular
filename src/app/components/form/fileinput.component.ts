import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'fileinput',
  template: `
    <div>
      <label for="file-upload" class="custom-file-upload">
        {{label}}
      </label>
      <input id="file-upload" type="file"/>
    </div>
  `,
  styles: [`
    .custom-file-upload {
      cursor: pointer;
    }
  `]
})
export class FileInputComponent {
  @Input() label!: string;
}
@NgModule({
    declarations: [FileInputComponent],
    exports: [FileInputComponent],
    imports: [
        CommonModule,
    ],
    })
export class FileInputComponentModule {}
