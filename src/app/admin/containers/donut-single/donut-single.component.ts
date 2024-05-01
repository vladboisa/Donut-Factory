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
    const id = 'fSap21';
    this.donut = this.donutService.readOneById(id);
  }
  onCreate(donut: Donut) {
    this.donutService.create(donut);
    console.log(this.donutService.readAll());
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut);
  }
  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }

}
