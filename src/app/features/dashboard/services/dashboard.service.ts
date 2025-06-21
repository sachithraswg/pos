import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardMetrics } from '../models/dashboard-metrics.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);

  getMetrics(): Observable<DashboardMetrics> {
    const mockMetrics: DashboardMetrics = {
      dailyRevenue: 1250,
      activePatients: 32,
      lowStockAlerts: 5,
      upcomingAppointments: 8
    };
    return of(mockMetrics);
  }
}
