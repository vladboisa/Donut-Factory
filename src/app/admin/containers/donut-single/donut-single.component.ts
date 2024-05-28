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
    let id:Donut["id"] = '80b3';
    this.donutService.createdDonutId$.subscribe({
      next: (createdId) => this.donut.id = createdId
    });
    this.donutService.readOneById(id).subscribe((donut) => {
      this.donut = donut;
    });
  }
  ngOnDestroy() {
    this.donutService.createdDonutId$.unsubscribe();
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe();
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next:undefined,
      error: (err) => console.log(`Error from Update : ${console.dir(err)}`)
    });
  }
  onDelete(donut: Donut) {
    this.donutService.delete(donut).subscribe({
      next:undefined,
      error: (err) => console.log(`Error from Update : ${console.dir(err)}`)
    });
  }
}
