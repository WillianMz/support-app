import { environment } from './../../environments/environment.prod';
import { Icategory } from './../models/icategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  save(isector: Icategory){
    if(isector.id){
      return this.update(isector);
    }
    else {
      return this.create(isector);
    }
  }

  getAll(): Observable<Icategory[]>{
    return this.http.get<Icategory[]>(`${environment.api}/categoria`).pipe(map(this.extractData), catchError(this.serviceError));
  }

  getById(id: number): Observable<Icategory>{
    return this.http.get<Icategory>(`${environment.api}/categoria/${id}`).pipe(map(this.extractData), catchError(this.serviceError));
  }

  private create(isector: Icategory): Observable<Icategory>{
    return this.http.post(`${environment.api}/categoria`, isector, this.getHeaderJson())
                    .pipe(map(this.extractData), catchError(this.serviceError));
  }

  private update(isector: Icategory): Observable<Icategory>{
    return this.http.put(`${environment.api}/categoria`, isector, this.getHeaderJson())
                    .pipe(map(this.extractData), catchError(this.serviceError));
  }

}
