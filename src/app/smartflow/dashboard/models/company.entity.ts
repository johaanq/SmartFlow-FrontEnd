export class Company {
  id_company: number;
  name: string;
  email: string;
  id_user: number;
  total_consumption: number;
  total_cost: number;
  efficiency: number;
  alerts: number;

  constructor() {
    this.id_company = 0;
    this.name = '';
    this.email = '';
    this.id_user = 0;
    this.total_consumption = 0;
    this.total_cost = 0;
    this.efficiency = 0;
    this.alerts = 0;
  }
}
