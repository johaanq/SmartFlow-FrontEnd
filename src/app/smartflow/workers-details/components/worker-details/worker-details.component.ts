import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../dashboard/services/company.service';
import { WorkerService } from '../../../dashboard/services/worker.service';
import { Company } from '../../../dashboard/models/company.entity';
import { Worker } from '../../../dashboard/models/worker.entity';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.css']
})
export class WorkerDetailsComponent implements OnInit {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  companies: Company[] = [];
  workers: Worker[] = [];
  selectedCompany: Company | null = null;
  selectedWorker: Worker | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private companyService: CompanyService,
    private workerService: WorkerService,
    private router: Router
  ) {}

  editWorker(workerId: number) {
    this.router.navigate(['/edit-worker', workerId]);
  }
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
    this.selectedWorker = this.workers.find(worker => worker.id === workerId) || null;
  }
}


