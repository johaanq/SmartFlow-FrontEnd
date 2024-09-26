import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = `${environment.apiUrl}/company`;

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyData(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${companyId}`);
  }

  getEmployeeConsumption(companyId: number, workerId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${companyId}/worker/${workerId}/consumption`);
  }
}
