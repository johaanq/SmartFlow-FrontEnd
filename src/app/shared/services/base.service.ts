import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected apiURL: string;

  constructor(protected http: HttpClient, @Inject(String) private endpoint: string) {
    this.apiURL = `${environment.apiUrl}/${endpoint}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiURL);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiURL}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.apiURL, item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiURL}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
