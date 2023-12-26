import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonwIcon } from '../components/button.component';
import { DialogueBoxComponent } from '../components/dialoguebox.component';
import { ApiService } from '../api/api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FormError } from '../types';
import { Subject, debounceTime, switchMap } from 'rxjs';
import { z } from 'zod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  standalone: true,
  imports: [ButtonwIcon, DialogueBoxComponent, FormsModule],
  template: `
    <div class="flex flex-row md:h-screen justify-center items-center">
      <div class="flex flex-col">
        <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
          <div class="text-titles">Login</div>
          <div class="h-4" id="spacer"></div>
          <input
            type="text"
            id="username"
            required
            [(ngModel)]="user.username"
            (ngModelChange)="onUsernameChange($event)"
            name="username"
            #username="ngModel"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="email"
          />
          <!-- errors -->
          <div
            class="{{
              !usernameError().isHidden && username.touched
                ? 'opacity-100 translate-y-0 h-8'
                : 'opacity-0 -translate-y-3/4 h-0'
            }} text-reject transition-all ease-in-out duration-500 block"
          >
            {{ usernameError().message }}
          </div>
          <div class="h-2" id="spacer"></div>
          <input
            type="password"
            id="password"
            required
            [(ngModel)]="user.password"
            name="password"
            #password="ngModel"
            class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
            placeholder="password"
          />
          <div class="h-2" id="spacer"></div>
          <div class="flex flex-row gap-2 items-center justify-end">
            <div class="text-small text-right">
              don't have an account? <br />
              <span class="underline cursor-pointer" (click)="registerPage()"
                >register</span
              >
            </div>
            <buttonwicon (click)="login()" label="Continue"></buttonwicon>
          </div>
        </form>
      </div>
      <div class="w-12" id="spacer"></div>
      <div class="">
        <!-- placeholder image -->
        <img src="../../assets/malaylogin.jpeg" class="w-96 object-cover" />
      </div>
    </div>
    @if (showDialog){
    <dialogue-box
      header="Info"
      content="First time logging in? You should change your password."
      button1="Change Password"
      button2="Later"
      (close)="closeDialog()"
      (firstButtonClicked)="
        showDialog = false; navigateToNextPage('/changePassword')
      "
      (secondButtonClicked)="showDialog = false; navigateToNextPage('/home')"
    ></dialogue-box>
    }
  `,
})
export class Login {
  showDialog = false;

  user = {
    username: '',
    password: '',
  };
  LoginForm: NgForm;

  // for the errors
  usernameError = signal<FormError>({
    message: 'Required',
    isHidden: true,
  });

  usernameSchema = z.object({
    username: z.string().min(2, 'Username must be at least 2 characters'),
  });

  // form states
  formSubmitted: boolean = false;
  isFormValid: boolean = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {
    this.LoginForm = new NgForm([], []);
    // Check contactnumber availability with debounce
    this.usernameSubject
      .pipe(
        debounceTime(300),
        switchMap((username) =>
          this.apiService.checkUsernameAvailability(username)
        )
      )
      .subscribe(
        (response) => {
          console.log('Response from backend', response);
          if (response.success === true) {
            this.usernameError().isHidden = true;
            this.usernameError().message = null;
          } else {
            this.usernameError().isHidden = false;
            this.usernameError().message = 'Username invalid.';
          }
        },
        (error) => {
          console.log('Error from backend', error);
          this.usernameError().isHidden = false;
          this.usernameError().message = 'Username invalid';
        }
      );
  }

  private usernameSubject = new Subject<string>();

  login() {
    this.apiService.login(this.user.username, this.user.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userType', res.role);

        // get the id
        this.apiService.getMerchantId(this.user.username).subscribe({
          next: (res) => {
            localStorage.setItem('userId', res.id);
            console.log(res);
          },
        });

        this.showDialog = true;
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('userType'));
      },
      error: (err) => {
        console.error('am i hit');
        this.toastr.error('Username or password is incorrect');
        this.usernameError.set({
          message: 'Username or password is incorrect',
          isHidden: false,
        });
      },
    });
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    try {
      this.user.username = this.usernameSchema.parse(form.value).username;
      console.log('Form data:', this.user);
    } catch (error) {
      console.log('Form is not valid');
      console.log(error);
      if (error instanceof z.ZodError) {
        this.usernameError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
      }
    }
  }

  onUsernameChange(username: string) {
    this.usernameSubject.next(username);
    this.usernameError.set({ message: null, isHidden: true });
    try {
      const validatedData = this.usernameSchema.parse({ username: username });
      this.isFormValid = true;
      console.log('Email is valid');
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.usernameError.set({
          message: error.errors[0].message,
          isHidden: false,
        });
      }
    }
    this.user.username = username;
  }

  navigateToNextPage(dest: string) {
    console.log('navigateToNextPage called with dest:', dest);
    if (dest === '/home') {
      if (!this.showDialog) {
        // Get the user type from localStorage
        const userType = localStorage.getItem('userType');

        // Navigate to the appropriate route based on the user type
        switch (userType) {
          case 'merchant':
            this.router.navigate(['/merchant/home']);
            break;
          case 'ministry_officer':
            console.log('officer');
            this.router.navigate(['/officer/home']);
            break;
          case 'customer':
            this.router.navigate(['/customer/home']);
            break;
          default:
            // Handle unknown user type
            console.error('Unknown user type:', userType);
            break;
        }
      }
    } else {
      console.log('navigateToNextPage called with dest:', dest);
      this.router.navigate([`/changePassword/${this.user.username}`]);
    }
  }

  registerPage() {
    this.router.navigate(['/merchant/register']);
  }

  closeDialog() {
    this.showDialog = false;
  }

  showDialogue() {
    this.showDialog = true;
  }
}
