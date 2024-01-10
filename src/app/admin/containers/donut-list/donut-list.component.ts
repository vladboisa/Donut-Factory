import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.sass']
})
export class DonutListComponent {
donuts!: Donut[];
ngOnInit() {
this.donuts = [{
  id: 'yHgsaf',
  name: 'Chocolate',
  icon: 'chocolate',
  price:119,
  description: 'Chocolate'
},
{
  id: 'yHgasfasgsaf',
  name: 'Glazed',
  icon: 'glazed',
  price:179,
  description: 'Glazed as fuck'
},
{
  id: 'yagsgasgHgsaf',
  name: 'Caramel',
  icon:'caramel',
  price:129,
  description: 'Cara cara mel'
}];
}
}
