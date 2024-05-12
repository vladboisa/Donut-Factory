import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { HttpClient } from '@angular/common/http';
import { interval, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];
  constructor(private http: HttpClient) {}
  readAll() {
    if (this.donuts.length) {
      return of(this.donuts).pipe(tap((v) => console.log('1', v)));
    }
    return this.http
      .get<Donut[]>(`/api/donuts`)
      .pipe(tap((donuts: Donut[]) => (this.donuts = donuts)));
  }
  readOneById(id: string) {
    return this.readAll().pipe(
      map((donuts) => {
        const findedDonutById = donuts.find((elem: Donut) => elem.id === id);
        if (findedDonutById) return findedDonutById;
        return { name: '', icon: '', price: 0, description: '' };
      })
    );
  }
  create(payload: Donut) {
    return this.http.post<Donut>(`/api/donuts`, payload).pipe(
      tap((resultDonut) => {
        return (this.donuts = [...this.donuts, resultDonut]);
      }),
      tap(() => console.log(this.donuts))
    );
  }
  update(payload: Donut) {
    return this.http.put<Donut>(`/api/donuts/${payload?.id}`, payload).pipe(
      tap((resultDonut) => {
        return (this.donuts = this.donuts.map((donut: Donut) => {
          if (donut.id === resultDonut.id) {
            return resultDonut;
          }
          return donut;
        }));
      })
    );
  }
  delete(payload: Donut) {
    return this.http.delete(`/api/donuts/${payload?.id}`).pipe(
      tap((resultDonut) => {
        console.log(resultDonut);
        return (this.donuts = this.donuts.filter(
          (donut: Donut) => donut.id !== payload.id
        ));
      })
    );
  }
}
