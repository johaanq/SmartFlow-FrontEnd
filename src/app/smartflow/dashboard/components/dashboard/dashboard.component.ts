import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { WorkerService } from '../../services/worker.service';
import { Company } from '../../models/company.entity';
import { Worker } from '../../models/worker.entity';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  companies: Company[] = [];
  workers: Worker[] = [];
  selectedCompany: Company | null = null;
  selectedWorker: Worker | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private companyService: CompanyService,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.loading = true;
    this.companyService.getAllCompanies().subscribe({
      next: (data) => {
        this.companies = data;
        // Seleccionamos la primera compañía por defecto
        if (this.companies.length > 0) {
          this.selectedCompany = this.companies[0];
          this.loadWorkers(this.selectedCompany.id_company);
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      }
    });
  }

  loadWorkers(companyId: number): void {
    this.loading = true; // Añadimos un indicador de carga
    this.workerService.getWorkersByCompany(companyId).subscribe({
      next: (data) => {
        this.workers = data;
        this.selectedWorker = null; // Reiniciamos el trabajador seleccionado
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      }
    });
  }

  selectCompany(event: MatSelectChange): void {
    const companyId = event.value;
    this.selectedCompany = this.companies.find(company => company.id_company === companyId) || null;
    if (this.selectedCompany) {
      // Al cambiar la compañía, se resetea el trabajador seleccionado
      this.selectedWorker = null;
      this.loadWorkers(this.selectedCompany.id_company);
    }
  }

  selectWorker(event: MatSelectChange): void {
    const workerId = event.value;
    this.selectedWorker = this.workers.find(worker => worker.id_worker === workerId) || null;
  }
}
