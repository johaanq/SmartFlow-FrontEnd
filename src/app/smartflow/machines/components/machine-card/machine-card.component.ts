import { Component, Input } from '@angular/core';
import { Machine } from '../../models/machine.entity';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.css']
})
export class MachineCardComponent {
  @Input() machine!: Machine;

  getStatusClass(): string {
    switch (this.machine.status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'maintenance':
        return 'status-maintenance';
      case 'idle':
        return 'status-idle';
      default:
        return 'status-unknown';
    }
  }
}
