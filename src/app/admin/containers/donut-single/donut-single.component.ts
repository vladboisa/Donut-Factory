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
    const id = '80b3';
    this.donutService.readOneById(id).subscribe((donut) => {
      this.donut = donut;
    });
  }
  onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe();
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe();
  }
  onDelete(donut: Donut) {
    this.donutService.delete(donut).subscribe();
  }
}
