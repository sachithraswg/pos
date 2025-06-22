import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.scss'],
  standalone: true
})
export class TreatmentListComponent {
  private router = inject(Router);

  onAddTreatment(): void {
    this.router.navigate(['/treatment/add']);
  }

  onViewTreatment(treatmentId: string): void {
    this.router.navigate(['/treatment', treatmentId]);
  }
}
