import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts : Donut[] = [{
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
  constructor() { }
  readAll () {
    return this.donuts;
  }
  readOneById(id:string) {
    const donut = this.donuts.find(
      (donut: Donut) => donut.id === id
    ) ;
    if (donut) return donut;
    return { name: '', icon: '', price: 0, description: '' };
  }
  create (payload: Donut) {
    this.donuts = [...this.donuts, payload]
  }
}
