import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts : Donut[] = [];
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
  update (payload: Donut) {
    this.donuts = this.donuts.map((donut:Donut)=>{
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    })
    console.log(this.donuts);
  }
  delete (payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut)=> donut.id !== payload.id);
    console.log(this.donuts);
  }
}
