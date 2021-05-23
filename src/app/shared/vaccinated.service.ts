import { Injectable } from '@angular/core';
import { Vacevent, Vaccinated } from './vacevent';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class VaccinatedService {
  private api = 'https://kwmcorana.s1810456019.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}

  getAll(vacevent_id: number): Observable<Array<Vaccinated>> {
    return this.http
      .get(`${this.api}/vaccinated/search/${vacevent_id}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  getSingle(id: number): Observable<Vaccinated> {
    return this.http
      .get<Vaccinated>(`${this.api}/vaccinated/${id}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  create(vaccinated: Vaccinated): Observable<any> {
    return this.http
      .post(`${this.api}/vaccinated`, vaccinated)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  update(vaccinated: Vaccinated): Observable<any> {
    return this.http
      .put(`${this.api}/vaccinated/${vaccinated.id}`, vaccinated)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
   remove(id: number): Observable<any> {
    return this.http
      .delete(`${this.api}/vaccinated/${id}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
