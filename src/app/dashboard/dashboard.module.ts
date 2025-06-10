import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCardComponent } from './dashboard-card.component';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule, DashboardComponent, DashboardCardComponent]
})
export class DashboardModule {}
