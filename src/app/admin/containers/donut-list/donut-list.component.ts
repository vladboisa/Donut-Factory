import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent {
donuts!: Donut[];
constructor () {}
ngOnInit() {
this.donuts = [{
  id: 'yHgsaf',
  name: 'Chocolate',
  icon: 'chocolate',
  price:119,
  promo: 'limited',
  description: 'Chocolate'
},
{
  id: 'yHgasfasgsaf',
  name: 'Glazed',
  icon: 'glazed',
  price:179,
  promo: 'new',
  description: 'Glazed as fuck'
},
{
  id: 'yagsgasgHgsaf',
  name: 'Caramel',
  icon:'caramel',
  price:129,
  description: 'Cara cara mel'
  },
{id: 'kZ8422',
name: 'Default donut',
icon:'default',
price:89,
description: 'Tasty default'
},
{id: 'fSap21',
name: 'White',
icon:'white',
price:109,
description: 'Sooooo fully white'
}];
}
  trackById(index: number, name: Donut) {
  return name.id;
}
}
