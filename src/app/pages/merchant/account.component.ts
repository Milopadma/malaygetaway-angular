import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonwIcon } from '../../components/button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  template: `
    <div class="h-12" id="spacer"></div>
    <div class="flex flex-col w-full">
      <form
        #changePasswordForm="ngForm"
        (ngSubmit)="onSubmit(changePasswordForm)"
      >
        <h1 class="text-titles">Change Password</h1>
        <div class="h-4" id="spacer"></div>
        <span class="text-paragraph">Change your password</span>
        <div id="spacer" class="h-4"></div>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex flex-col gap-4">
            <input
              type="text"
              id="oldPassword"
              required
              [(ngModel)]="user.oldPassword"
              (ngModelChange)="onOldPasswordChange($event)"
              name="oldPassword"
              #oldPassword="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
              placeholder="old password"
            />
            <input
              type="text"
              id="productType"
              required
              [(ngModel)]="user.newPassword"
              (ngModelChange)="onNewPasswordChange($event)"
              name="newPassword"
              #newPassword="ngModel"
              class="text-black placeholder:text-fadedgray text-paragraph leading-7 tracking-tighter whitespace-nowrap border-[color:var(--Soft-Black,#2C2C2C)] w-[412px] max-w-full px-5 py-4 border-2 border-solid max-md:pl-1"
              placeholder="new password"
            />
          </div>
        </div>
        <div class="h-32" id="spacer"></div>
        <div
          class="flex flex-col items-end"
          type="submit"
          [ariaDisabled]="!isFormValid"
        >
          <buttonwicon label="Continue" [disabled]="!isFormValid"></buttonwicon>
          <p
            class="text-softgray text-base font-light leading-5 tracking-tighter whitespace-nowrap"
          >
            or press Enter
          </p>
        </div>
      </form>
    </div>
  `,
  imports: [FormsModule, ButtonwIcon],
})
export class ChangePasswordFormComponent implements OnInit {
  merchantId: string = '';
  merchantData: any = {};
  isFormValid: boolean = false;
  changePasswordForm: NgForm;
  user = {
    oldPassword: '',
    newPassword: '',
    username: '',
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.changePasswordForm = new NgForm([], []);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let email = params['email'];
      email = email.replace(/"/g, ''); // remove quotation marks
      console.log(email);
      this.apiService.getUserByEmail(email).subscribe((response) => {
        console.log(response);
        this.user = response.data;

        console.log(this.user);
      });
    });
    this.getMerchantData();
  }

  getMerchantData(): void {
    this.apiService.getMerchant(this.merchantId).subscribe(
      (data: any) => {
        this.merchantData = data;
        this.user.username = this.merchantData.username;
      },
      (error: any) => {
        console.error('Failed to fetch merchant data:', error);
      }
    );
  }

  onOldPasswordChange(value: string): void {
    this.user.oldPassword = value;
    this.validateForm();
  }

  onNewPasswordChange(value: string): void {
    this.user.newPassword = value;
    this.validateForm();
  }

  validateForm(): void {
    this.isFormValid =
      this.user.oldPassword.length > 0 && this.user.newPassword.length > 0;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.saveChanges();
    }
  }

  saveChanges(): void {
    // Update the merchant data with the new username and password
    this.merchantData.username = this.user.username;

    const userId = this.merchantData.merchantId;

    // Call the API to save the changes
    this.apiService
      .changePassword(userId, this.user.newPassword, this.user.oldPassword)
      .subscribe(
        () => {
          console.log('Merchant data updated successfully');
        },
        (error: any) => {
          console.error('Failed to update merchant data:', error);
        }
      );
  }
}
