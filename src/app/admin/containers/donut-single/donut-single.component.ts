import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent {
  donut!: Donut;
  constructor(
    private donutService: DonutService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.donutService.readOneById(id).subscribe((donut) => {
      this.donut = donut;
    });
    this.donutService.createdDonutId$
      .pipe(
        take(1),
        map((createdId) => (this.donut.id = createdId))
      )
      .subscribe();
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe();
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: undefined,
      error: (err) => console.log(`Error from Update : ${console.dir(err)}`),
    });
  }
  onDelete(donut: Donut) {
    this.donutService.delete(donut).subscribe({
      next: undefined,
      error: (err) => console.log(`Error from Update : ${console.dir(err)}`),
    });
  }
}
