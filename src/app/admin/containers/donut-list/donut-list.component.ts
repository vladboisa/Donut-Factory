import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { RouterModule } from '@angular/router';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [RouterModule, DonutCardComponent, NgIf, NgForOf],
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
