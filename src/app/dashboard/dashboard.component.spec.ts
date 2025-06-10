import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockMetrics = {
  dailyRevenue: 1250,
  activePatients: 32,
  lowStockAlerts: 5,
  upcomingAppointments: 8
};

class MockDashboardService {
  getMetrics() {
    return of(mockMetrics);
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: DashboardService, useClass: MockDashboardService }],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should load metrics on init', () => {
    component.ngOnInit();
    expect(component.metrics).toEqual(mockMetrics);
  });
});
