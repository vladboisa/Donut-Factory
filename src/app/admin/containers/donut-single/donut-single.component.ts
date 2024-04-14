import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent {
  donut!: Donut;
  constructor(private donutService: DonutService) {}
  ngOnInit() {
    const id = 'yHgsaf';
    this.donut = this.donutService.readOneById(id);
  }
  onCreate(donut: Donut) {
    console.log('🚀 ~ DonutSingleComponent ~ createForm ~ donut:', donut);
  }
}
