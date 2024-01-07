import { Component } from '@angular/core';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.sass']
})
export class DonutListComponent {
  donut!:any;
donuts!: any[];
ngOnInit() {
this.donuts = [{
  id: 'yHgsaf',
  name: 'Chocolate',
  price:119,
  description: 'Chocolate'
},
{
  id: 'yHgasfasgsaf',
  name: 'Glazed',
  price:179,
  description: 'Glazed as fuck'
},
{
  id: 'yagsgasgHgsaf',
  name: 'Caramel',
  price:129,
  description: 'Cara cara mel'
}];
this.donut = this.donuts[0]
}
}
