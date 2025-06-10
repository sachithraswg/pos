import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardMetrics } from './dashboard-metrics.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

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
