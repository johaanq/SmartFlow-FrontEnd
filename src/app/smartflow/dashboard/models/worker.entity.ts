export class Worker {
  id_worker: number;
  name: string;
  occupation: string;
  phone: string;
  correo: string;
  id_company: number;
  consumption: number;
  cost: number;

  constructor() {
    this.id_worker = 0;
    this.name = '';
    this.occupation = '';
    this.phone = '';
    this.correo = '';
    this.id_company = 0;
    this.consumption = 0;
    this.cost = 0;
  }
}
