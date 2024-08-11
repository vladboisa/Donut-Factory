import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { CurrencyPipe, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donut-card',
  standalone: true,
  imports: [RouterModule, NgClass, NgSwitch, NgSwitchCase, CurrencyPipe],
  templateUrl: './donut-card.component.html',
  styleUrls: ['./donut-card.component.scss']
})
export class DonutCardComponent {
  @Input() donut: Donut;
  constructor () {

  }
}
