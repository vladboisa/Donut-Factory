import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent {
donuts!: Donut[];
constructor (private donutService: DonutService) {}
ngOnInit() {
this.donuts = this.donutService.readAll();
}
  trackById(index: number, name: Donut) {
  return name.id;
}
}
