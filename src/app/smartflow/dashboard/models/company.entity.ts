export class Company {
  id_company: number;
  name: string;
  phone: string;
  industry: string;
  location: string;
  email: string;
  id_user: number;
  total_consumption: number;
  total_cost: number;
  efficiency: number;
  alerts: number;
  consumption_history: { date: string; consumption: number; cost: number }[];

  constructor() {
    this.id_company = 0;
    this.name = '';
    this.phone = '';
    this.industry = '';
    this.location = '';
    this.email = '';
    this.id_user = 0;
    this.total_consumption = 0;
    this.total_cost = 0;
    this.efficiency = 0;
    this.alerts = 0;
    this.consumption_history = [];
  }
}
