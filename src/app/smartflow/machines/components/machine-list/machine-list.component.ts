import { Component, OnInit, OnDestroy } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { CompanyService } from '../../../dashboard/services/company.service'; // Importa el CompanyService
import { Machine } from '../../models/machine.entity';
import { Company } from '../../../dashboard/models/company.entity'; // Asegúrate de que la entidad Company esté bien definida
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit, OnDestroy {
  machines: Machine[] = [];
  loading: boolean = true;
  error: string | null = null;
  private machineSubscription: Subscription | null = null;
  private companySubscription: Subscription | null = null;

  companies: Company[] = []; // Cambia el tipo a Company[]
  selectedCompany: number = 1; // O inicializa con un ID válido de compañía

  constructor(
    private machineService: MachineService,
    private companyService: CompanyService // Inyecta el CompanyService
  ) {}

  ngOnInit(): void {
    this.loadCompanies(); // Carga las compañías al iniciar
    this.loadMachines();
  }

  ngOnDestroy(): void {
    if (this.machineSubscription) {
      this.machineSubscription.unsubscribe();
    }
    if (this.companySubscription) {
      this.companySubscription.unsubscribe(); // Asegúrate de cancelar la suscripción de compañías
    }
  }

  loadCompanies(): void {
    this.companySubscription = this.companyService.getAllCompanies().subscribe({
      next: (data) => {
        this.companies = data; // Asigna las compañías obtenidas
        console.log('Companies received:', data);
      },
      error: (error) => {
        console.error('Error fetching companies:', error);
        this.error = 'Error loading companies. Please try again later.';
      }
    });
  }

  loadMachines(): void {
    this.loading = true;
    this.error = null;
    console.log('Loading machines for company:', this.selectedCompany);
    this.machineSubscription = this.machineService.getMachinesByCompany(this.selectedCompany).subscribe({
      next: (data) => {
        console.log('Machines received:', data);
        this.machines = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching machines:', error);
        this.error = 'Error loading machines. Please try again later.';
        this.loading = false;
      }
    });
  }

  onCompanyChange(): void {
    console.log('Company changed to:', this.selectedCompany);
    this.loadMachines();
  }
}
