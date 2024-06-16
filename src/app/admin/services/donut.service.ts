import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ReplaySubject, catchError, map, of, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];
  private headers = new HttpHeaders({
  })
  constructor(private http: HttpClient) {

  }
  readAll() {
    if (this.donuts.length) {
      return of(this.donuts);
    }
    this.headers = this.headers.append('Api-token','345')
    return this.http.get<Donut[]>(`/api/donuts`,{headers:this.headers}).pipe(
      tap((donuts: Donut[]) => (this.donuts = donuts)),
      retry({count:2,delay:5000}),
      catchError(this.handleError)
    );
  }
  readOneById(id: string | null) {
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
        return this.donuts = [...this.donuts, resultDonut];
      }),
      tap(() => console.log(this.donuts)),
      retry({count:2,delay:5000}),
      catchError(this.handleError)
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
      }),
      retry({count:2,delay:5000}),
      catchError(this.handleError)
    );
  }
  delete(payload: Donut) {
    return this.http.delete(`/api/donuts/${payload?.id}`).pipe(
      tap((resultDonut) => {
        return (this.donuts = this.donuts.filter(
          (donut: Donut) => donut.id !== payload.id
        ));
      }),
      retry({count:2,delay:5000}),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      //client-side
    } else {
      //server-side
    }
    return throwError(() => new Error(err.message));
  }
}
