import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private apiUrl = `${environment.apiUrl}/workers`;

  constructor(private http: HttpClient) {}

  getWorkersByCompany(id_company: number): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${this.apiUrl}?id_company=${id_company}`);

  }
}
