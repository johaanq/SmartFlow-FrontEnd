export class Machine {
  id_machine: number;
  type: string;
  status: string;
  name: string;
  serial_number: string;
  operational_hours: number;
  location: string;
  id_company: number;

  constructor() {
    this.id_machine = 0;
    this.type = '';
    this.status = '';
    this.name = '';
    this.serial_number = '';
    this.operational_hours = 0;
    this.location = '';
    this.id_company = 0;
  }
}
