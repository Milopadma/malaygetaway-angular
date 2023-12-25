import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { IconComponent } from '../../components/icon.component';
import { ButtonNoIcon } from '../../components/buttonnoicon.component';
import { MerchantData, MerchantStatus } from '../../types';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'officer-merchant-application',
  standalone: true,
  imports: [IconComponent, ButtonNoIcon, CommonModule, NgxDocViewerModule],
  template: `
    <div class="flex flex-col h-full">
      <div class="h-12" id="spacer"></div>
      <div class="w-full flex items-start">
        <button
          class="text-small flex flex-row items-center gap-2 hover:cursor-pointer hover:underline"
          (click)="navigateToPage('officer/applications')"
        >
          <icon iconName="LeftArrow" />Back
        </button>
      </div>
      <div class="h-6" id="spacer"></div>
      <span class="text-small">Review submitted applications</span>
      <div class="h-6" id="spacer"></div>
      <div class="flex flex-row grow">
        <div class="flex flex-col w-1/2 h-2/3 justify-between">
          <div class="flex flex-col">
            <h1 class="text-titles">{{ merchantData.name }}</h1>
            <div class="h-4" id="spacer"></div>
            <span class="text-paragraph">{{ merchantData.description }}</span>
          </div>
          <div>
            <div class="h-6" id="spacer"></div>
            <div class="flex flex-row justify-between px-4">
              <buttonnoicon
                label="Reject"
                (click)="rejectMerchant()"
              ></buttonnoicon>
              <div class="w-4" id="spacer"></div>
              <buttonnoicon
                label="Approve"
                (click)="approveMerchant()"
              ></buttonnoicon>
            </div>
          </div>
        </div>
        <div class="flex w-1/2">
          <ngx-doc-viewer
            [url]="merchantData.businessFileURLs[0]"
            viewer="url"
            style="width:100%;height:50vh;"
          ></ngx-doc-viewer>
          <ngx-doc-viewer
            [url]="merchantData.businessFileURLs[1]"
            viewer="url"
            style="width:100%;height:50vh;"
          ></ngx-doc-viewer>

          <!-- gray box -->
          <!-- <div class="h-2/3 w-full bg-softgray block"></div> -->
        </div>
      </div>
    </div>
  `,
})
export class OfficerMerchantApplicationsComponent implements OnInit {
  merchantData: MerchantData = {
    merchantId: 0,
    name: '',
    contactNumber: 0,
    contactEmail: '',
    description: '',
    businessFileURLs: [''],
    status: MerchantStatus.PENDING,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const merchantId = params['id'];
      console.log(merchantId);
      this.apiService.getMerchant(merchantId).subscribe((response) => {
        this.merchantData = response.data.data.data;

        console.log(this.merchantData);
      });
    });
  }

  approveMerchant() {
    this.apiService
      .setStatus(this.merchantData.merchantId, MerchantStatus.ACCEPTED)
      .subscribe((response) => {
        console.log('Merchant approved');
      });
  }

  rejectMerchant() {
    this.apiService
      .setStatus(this.merchantData.merchantId, MerchantStatus.REJECTED)
      .subscribe((response) => {
        console.log('Merchant rejected');
      });
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
