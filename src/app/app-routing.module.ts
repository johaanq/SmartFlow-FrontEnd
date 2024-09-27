import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './smartflow/public/pages/home/home.component';
import { DashboardComponent } from './smartflow/dashboard/components/dashboard/dashboard.component';
import { MachineListComponent } from './smartflow/machines/components/machine-list/machine-list.component';
import { WorkerEditDetailsComponent } from './smartflow/workers-details/components/worker-edit-details/worker-edit-details.component';
import { WorkerDetailsComponent } from './smartflow/workers-details/components/worker-details/worker-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'machines', component: MachineListComponent },
  { path: 'profile', component: WorkerDetailsComponent },
  { path: 'edit-worker/:id', component: WorkerEditDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
