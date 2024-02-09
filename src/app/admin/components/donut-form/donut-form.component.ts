import { Component } from '@angular/core';

@Component({
  selector: 'app-donut-form',
  templateUrl: './donut-form.component.html',
  styleUrls: ['./donut-form.component.scss']
})
export class DonutFormComponent {
icons :string[] = [
  'caramel',
  'chocolate',
  'default',
  'glazed',
  'white'
]
}
