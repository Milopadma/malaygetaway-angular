import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonwIcon } from '../../components/button.component';
@Component({
  selector: 'completed-form',
  standalone: true,
  imports: [RouterOutlet, ButtonwIcon],
  template: `
    <div id="spacer" class="h-64"></div>
    <div class="flex flex-col">
      <h1 class="text-zinc-800 text-titles leading-10 tracking-tighter">
        Congratulations!
      </h1>
      <div id="spacer" class="h-4"></div>
      <div class="flex flex-col md:flex-row gap-6 text-paragraph">
        You have completed the application <br />form, our officials will check
        back with <br />you soon.
      </div>
      <div class="h-32" id="spacer"></div>
      <div class="flex flex-col items-end">
        <buttonwicon
          label="Finish"
          (click)="navigateToNextPage()"
        ></buttonwicon>
        <p
          class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
        >
          or press Enter
        </p>
      </div>
    </div>
  `,
})
export class CompletedFormComponent {
  constructor(private router: Router) {}

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    this.router.navigate(['/login']); // TODO replace '/' with the actual route later
  }
}
