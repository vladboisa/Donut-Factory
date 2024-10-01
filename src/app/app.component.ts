import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, SpinnerComponent, CommonModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (public spinnerService: SpinnerService) {
  }
}
