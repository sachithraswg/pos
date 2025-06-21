import { TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should return mock metrics', (done) => {
    service.getMetrics().subscribe(metrics => {
      expect(metrics.dailyRevenue).toBe(1250);
      expect(metrics.activePatients).toBe(32);
      expect(metrics.lowStockAlerts).toBe(5);
      expect(metrics.upcomingAppointments).toBe(8);
      done();
    });
  });
});
