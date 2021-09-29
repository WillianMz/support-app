import { environment } from './../../environments/environment.prod';
import { Iticket } from './../models/iticket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

  create(iticket: Iticket): Observable<Iticket>{
    return this.http
      .post(`${environment.api}/Ticket`, iticket, this.getHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  update(iticket: Iticket): Observable<Iticket>{
    return this.http
      .put(`${environment.api}/Ticket`, iticket, this.getHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  cancel(iticket: Iticket): Observable<Iticket>{
    return this.http
      .put(`${environment.api}/Ticket/Cancelar`, iticket, this.getHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  finish(iticket: Iticket): Observable<Iticket>{
    return this.http
      .put(`${environment.api}/Ticket/Finalizar`, iticket, this.getHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getAll(): Observable<Iticket[]>{
    return this.http
      .get<Iticket[]>(`${environment.api}/Ticket`)
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

  getById(id: number): Observable<Iticket>{
    return this.http
      .get<Iticket>(`${environment.api}/Ticket/${id}`, this.getHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
  }

}
