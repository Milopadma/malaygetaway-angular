import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'progress-bar',
  standalone: true,
  template: `
    <div class="flex justify-between items-center">
      <div
        class="w-full flex-row border-t-2 border-gray-200 relative flex justify-between"
      >
        @for (label of labels; track label ){ @if (label == current) {
        <div
          class="-bottom-5 text-small after:content-['*'] after:text-accent text-softgray
            after:relative after:bottom-1/2 after:right-1/2 after:transform 
        "
        >
          {{ label }}
        </div>
        } @else {
        <div
          class="-bottom-5 text-small after:content-['*'] text-softgray
            after:relative after:bottom-1/2 after:right-1/2 after:transform "
        >
          {{ label }}
        </div>
        } } @empty {
        <div class="relative">empty</div>
        }
      </div>
    </div>
  `,
})
export class ProgressBarComponent implements OnInit {
  @Input() labels: string[] = [];
  current: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url
      .pipe(
        filter((segments) => segments.length > 0),
        map((segments) => segments.join('/'))
      )
      .subscribe((path) => {
        this.current = path;
      });
  }
}
