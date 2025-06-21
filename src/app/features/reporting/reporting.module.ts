import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportsDashboardComponent } from './reports-dashboard.component';
import { ReportsListComponent } from './reports-list.component';

@NgModule({
  imports: [SharedModule, ReportingRoutingModule, ReportsDashboardComponent, ReportsListComponent]
})
export class ReportingModule {}
