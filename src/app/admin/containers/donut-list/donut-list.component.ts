import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss'],
})
export class DonutListComponent {
  donuts!: Donut[];
  constructor(private donutService: DonutService) {}
  ngOnInit() {
    this.donutService.readAll().subscribe((donuts: Donut[]) => {
      this.donuts = donuts;
    });
  }
  trackById(index: number, name: Donut) {
    return name.id;
  }
}
