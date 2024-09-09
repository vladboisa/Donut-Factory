import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from '../services/spinner.service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() detectRouteTransitions = false;
constructor (public spinnerService: SpinnerService, private router: Router) {
}
ngOnInit() {
  if (this.detectRouteTransitions) {
    this.router.events
      .pipe(
        tap((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.spinnerService.showSpinner();
          } else if (event instanceof RouteConfigLoadEnd) {
            this.spinnerService.hideSpinner();
          }
        })
      )
      .subscribe();
  }
}
}

