import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = `${environment.apiUrl}/machines`;

  constructor(private http: HttpClient) { }

  getMachinesByCompany(companyId: number): Observable<Machine[]> {
    return this.http.get<Machine[]>(`${this.apiUrl}?id_company=${companyId}`);
  }

  getAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl);
  }
}
