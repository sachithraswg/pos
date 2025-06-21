import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { DashboardMetrics } from '../models/dashboard-metrics.model';
import { environment } from '../../environments/environment';

@Injectable({ 
  providedIn: 'root' 
})
export class DashboardService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getMetrics(): Observable<DashboardMetrics> {
    return this.http.get<DashboardMetrics>(`${this.apiUrl}/dashboard/metrics`)
      .pipe(
        catchError(error => {
          console.error('Error fetching dashboard metrics:', error);
          // Return mock data as fallback
          return of({
            dailyRevenue: 1250,
            activePatients: 32,
            lowStockAlerts: 5,
            upcomingAppointments: 8
          });
        })
      );
  }
}
