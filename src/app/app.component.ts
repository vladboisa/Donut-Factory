import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, SpinnerComponent, CommonModule],
  providers: [SpinnerComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: SpinnerService;
  constructor (private activatedRoute: ActivatedRoute) {
    console.log(this.isLoading);
  }
}
