import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonwIcon } from '../components/button.component';
import { DialogueBoxComponent } from '../components/dialoguebox.component';
import { ApiService } from '../api/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonwIcon, DialogueBoxComponent, FormsModule],
  template: `
    <div class="flex flex-row md:h-screen justify-center items-center">
      <div class="flex flex-col">
        <div class="text-titles">Login</div>
        <div class="h-4" id="spacer"></div>
        <input
          [(ngModel)]="username"
          type="text"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
          placeholder="username or email"
        />
        <div class="h-2" id="spacer"></div>
        <input
          [(ngModel)]="password"
          type="text"
          class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
          placeholder="password"
        />
        <div class="h-2" id="spacer"></div>
        <div class="flex flex-row gap-2 items-center justify-end">
          <div class="text-small text-right">
            don't have an account? <br />
            <span class="underline">register</span>
          </div>
          <buttonwicon (click)="login()" label="Continue"></buttonwicon>
        </div>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="">
        <!-- placeholder image -->
        <img src="https://via.placeholder.com/600x600" />
      </div>
    </div>
    @if (showDialog){
    <dialogue-box
      header="Info"
      content="First time logging in? You should change your password."
      button1="Change Password"
      button2="Later"
      (close)="closeDialog()"
      (secondButtonClicked)="showDialog = false; navigateToNextPage()"
    ></dialogue-box>
    }
  `,
})
export class Login {
  username: string = '';
  password: string = '';
  showDialog = false;

  constructor(private router: Router, private apiService: ApiService) {}

  login() {
    this.apiService.login(this.username, this.password).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.showDialog = true;

        console.log(localStorage.getItem('token'));
      },
      (err) => {
        // Show error message if login fails
        console.error(err);
      }
    );
  }

  navigateToNextPage() {
    if (!this.showDialog) {
      this.router.navigate(['/merchant/home']);
    }
  }

  closeDialog() {
    this.showDialog = false;
  }

  showDialogue() {
    this.showDialog = true;
  }
}
