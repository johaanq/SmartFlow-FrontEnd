import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Worker } from '../../../dashboard/models/worker.entity';
import { WorkerService } from '../../../dashboard/services/worker.service';

@Component({
  selector: 'app-worker-edit-details',
  templateUrl: './worker-edit-details.component.html',
  styleUrls: ['./worker-edit-details.component.css']
})
export class WorkerEditDetailsComponent implements OnInit {
  @Input() worker!: Worker;

  constructor(
    private route: ActivatedRoute,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    const workerId = this.route.snapshot.paramMap.get('id');
    if (workerId !== null) {
      const id = +workerId; // Convierte a número
      this.workerService.getWorkerById(id).subscribe(worker => {
        this.worker = worker;
      });
    } else {
      // Maneja el caso en que workerId sea null
      console.error('Worker ID is null');
    }
  }
}
