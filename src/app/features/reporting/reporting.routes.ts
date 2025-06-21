import { Routes } from '@angular/router';
import { ReportsDashboardComponent } from './components/reports-dashboard/reports-dashboard.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';

export const REPORTING_ROUTES: Routes = [
  {
    path: '',
    component: ReportsDashboardComponent
  },
  {
    path: 'list',
    component: ReportsListComponent
  }
]; 