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
    const id = '';
    this.donut = this.donutService.readOneById(id);
  }
  onCreate(donut: Donut) {
    this.donutService.create(donut);
    console.log(this.donutService.readAll());
  }

}
