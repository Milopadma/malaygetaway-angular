import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttonwIconModule } from '../../components/button.component';
import { ProgressBarComponentModule } from '../../components/form/progressbar.component';
import { RouterOutlet } from '@angular/router';
import { FileInputComponentModule } from "../../components/form/fileinput.component";
@Component({
  selector: 'businessfiles-form',
  template: `
    <div class="flex flex-col">
      <h1
        class="text-zinc-800 text-subtitles leading-10 tracking-tighter max-w-[313px] mt-20 max-md:mt-10"
      >
        Upload your business documents
      </h1>
      <fileinput label="Licenses"></fileinput>
      <div class="h-32" id="spacer"></div>
      <div class="flex flex-col items-end">
        <buttonwicon></buttonwicon>
        <p
          class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
        >
          or press Enter
        </p>
      </div>
    </div>
  `,
})
export class BusinessFilesFormComponent {}

@NgModule({
    declarations: [BusinessFilesFormComponent],
    exports: [BusinessFilesFormComponent],
    imports: [
        CommonModule,
        buttonwIconModule,
        ProgressBarComponentModule,
        RouterOutlet,
        FileInputComponentModule
    ]
})
export class BusinessFilesFormComponentModule {}
