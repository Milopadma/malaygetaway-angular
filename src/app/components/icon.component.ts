import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

// export enum IconName {
//   Home = 'home',
//   User = 'user',
//   Settings = 'settings',
// }

@Component({
  selector: 'icon',
  template: `
    @if (iconName === "Home") {
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
    } @else if (iconName === "Upload") {
    <svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2084 25.14H16.7917V19.7473L18.8584 21.8139L20.6667 19.9733L15.5001 14.8066L10.3334 19.9733L12.174 21.7816L14.2084 19.7473V25.14ZM5.16675 29.015V3.18164H18.0834L25.8334 10.9316V29.015H5.16675ZM16.7917 12.2233H23.2501L16.7917 5.76497V12.2233Z"
        fill="#2C2C2C"
      />
    </svg>

    } @else if (iconName === "ChevronDown") {
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.59 9.09L12 13.67L7.41 9.09L6 10.5L12 16.5L18 10.5L16.59 9.09Z"
        fill="#2C2C2C"
      />
    </svg>
    }

    <!-- Add more svg icons as needed -->
  `,
  styles: [
    `
      .icon {
        /* add your icon styles here */
      }
      /* add more icon styles as needed */
    `,
  ],
})
export class IconComponent {
  @Input() iconName!: string;
  @Input() size!: string;
}
@NgModule({
  declarations: [IconComponent],
  exports: [IconComponent],
  imports: [CommonModule],
})
export class IconComponentModule {}
