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

  onViewTreatment(): void {
    // Navigate to treatment history for the animal associated with this treatment
    // For now, using a mock animal ID - in a real app, you'd get this from the treatment data
    const animalId = 'buddy-001'; // This would come from the treatment record
    this.router.navigate(['/treatment/history', animalId]);
  }
}
