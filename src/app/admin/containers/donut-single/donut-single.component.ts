import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { DonutFormComponent } from '../../components/donut-form/donut-form.component';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  standalone: true,
  imports: [RouterModule, DonutFormComponent, JsonPipe],
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss'],
})
export class DonutSingleComponent {
  donut!: Donut;
  isEditable!: boolean;

  constructor(
    private donutService: DonutService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isEditable = this.activatedRoute.snapshot.data.isEditable;
    this.donutService.readOneById(id).subscribe((donut) => {
      this.donut = donut;
    });
  }

  onCreate(donut: Donut) {
    this.donutService.create(donut).subscribe((donut)=> this.router.navigate(['admin','donuts',donut.id]));
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: ()=>this.router.navigate(['admin','donuts']),
      error: (err) => console.log(`Error from Update : ${console.dir(err)}`),
    });
  }
  onDelete(donut: Donut) {
    this.donutService.delete(donut).subscribe({
      next: ()=>this.router.navigate(['admin','donuts']),
      error: (err) => console.log(`Error from Update : ${console.dir(err)}`),
    });
  }
}
