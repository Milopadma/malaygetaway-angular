import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonwIcon } from '../../components/button.component';
import { MerchantRegistrationService } from './merchantregistration.service';
import { ApiService } from '../../api/api.service';
import { ProgressBarComponent } from '../../components/form/progressbar.component';
@Component({
  selector: 'completed-form',
  standalone: true,
  template: `
    <progress-bar
      [labels]="['Business name', 'Details', 'Documents', 'Done']"
      [current]="'Done'"
    />
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
      <button (click)="test()">hello</button>
    </div>
  `,
  imports: [RouterOutlet, ButtonwIcon, ProgressBarComponent],
})
export class CompletedFormComponent implements OnInit {
  constructor(
    private router: Router,
    private mrs: MerchantRegistrationService,
    private apiservice: ApiService
  ) {}

  test() {
    this.apiservice.testAPI();
  }

  ngOnInit() {
    this.mrs.registerMerchant();
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.navigateToNextPage();
  }

  navigateToNextPage() {
    this.router.navigate(['/login']); // TODO replace '/' with the actual route later
  }
}
