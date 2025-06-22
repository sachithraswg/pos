import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-treatment-details',
  templateUrl: './add-treatment-details.component.html',
  styleUrls: ['./add-treatment-details.component.scss'],
  standalone: true
})
export class AddTreatmentDetailsComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isAddMode = false;
  treatmentId: string | null = null;
  pageTitle = '';

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      // Check if the current route is 'add'
      this.isAddMode = segments.some(segment => segment.path === 'add');
      
      if (this.isAddMode) {
        this.pageTitle = 'Add Treatment Record';
      } else {
        this.pageTitle = 'Edit Treatment Record';
        // Get the treatment ID from route params
        this.route.params.subscribe(params => {
          this.treatmentId = params['id'];
          this.loadTreatmentData();
        });
      }
    });
  }

  private loadTreatmentData(): void {
    if (this.treatmentId) {
      // TODO: Load treatment data from service
      console.log('Loading treatment with ID:', this.treatmentId);
    }
  }

  onSave(): void {
    if (this.isAddMode) {
      // TODO: Save new treatment
      console.log('Saving new treatment');
    } else {
      // TODO: Update existing treatment
      console.log('Updating treatment with ID:', this.treatmentId);
    }
    
    // Navigate back to treatment list
    this.router.navigate(['/treatment']);
  }

  onCancel(): void {
    // Navigate back to treatment list
    this.router.navigate(['/treatment']);
  }
}
