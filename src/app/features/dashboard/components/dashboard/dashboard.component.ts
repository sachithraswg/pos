import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardMetrics } from '../../models/dashboard-metrics.model';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, DashboardCardComponent]
})
export class DashboardComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  
  public metrics = signal<DashboardMetrics | null>(null);
  public loading = signal(false);
  public error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadMetrics();
  }

  private loadMetrics(): void {
    this.loading.set(true);
    this.error.set(null);

    this.dashboardService.getMetrics()
      .pipe(
        catchError(error => {
          this.error.set('Failed to load dashboard metrics');
          return of(null);
        }),
        finalize(() => this.loading.set(false))
      )
      .subscribe(metrics => {
        if (metrics) {
          this.metrics.set(metrics);
        }
      });
  }
}
