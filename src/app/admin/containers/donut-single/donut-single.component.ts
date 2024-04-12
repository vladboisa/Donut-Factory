import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss']
})
export class DonutSingleComponent {
  onCreate(donut: Donut) {
  console.log("🚀 ~ DonutSingleComponent ~ createForm ~ donut:", donut)
  }
}
