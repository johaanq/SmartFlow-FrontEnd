import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './smartflow/dashboard/components/dashboard/dashboard.component';
import { SideNavigationBarComponent } from './smartflow/public/components/side-navigation-bar/side-navigation-bar.component';
import { ToolbarComponent } from './smartflow/public/components/toolbar/toolbar.component';
import { MachineListComponent } from './smartflow/machines/components/machine-list/machine-list.component';
import { MachineCardComponent } from './smartflow/machines/components/machine-card/machine-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './smartflow/public/pages/home/home.component';
import { WorkerDetailsComponent } from './smartflow/workers-details/components/worker-details/worker-details.component';
import { WorkerEditDetailsComponent } from './smartflow/workers-details/components/worker-edit-details/worker-edit-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavigationBarComponent,
    ToolbarComponent,
    MachineListComponent,
    MachineCardComponent,
    HomeComponent,
    WorkerDetailsComponent,
    WorkerEditDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
