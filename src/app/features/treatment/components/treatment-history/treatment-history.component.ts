import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface TreatmentRecord {
  id: string;
  date: string;
  veterinarian: string;
  diagnosis: string;
  prescription: string;
  treatmentType: string;
  attachments: string[];
  followUpStatus: string;
  notes?: string;
}

@Component({
  selector: 'app-treatment-history',
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TreatmentHistoryComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  animalId: string | null = null;
  animalName: string = '';
  treatmentRecords: TreatmentRecord[] = [];
  loading = true;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.animalId = params['animalId'];
      this.loadTreatmentHistory();
    });
  }

  private loadTreatmentHistory(): void {
    if (this.animalId) {
      // TODO: Load treatment history from service
      console.log('Loading treatment history for animal ID:', this.animalId);
      
      // Mock data for demonstration
      this.animalName = 'Buddy (Golden Retriever)';
      this.treatmentRecords = [
        {
          id: '1',
          date: '2024-07-26',
          veterinarian: 'Dr. Emily Carter',
          diagnosis: 'Ear infection - Otitis externa in right ear',
          prescription: 'Ear drops: Otomax 2-3 drops twice daily for 7 days',
          treatmentType: 'Medical Treatment',
          attachments: ['ear_examination.jpg', 'lab_results.pdf'],
          followUpStatus: 'Scheduled',
          notes: 'Patient responded well to treatment. Follow-up in 2 weeks to ensure complete resolution.'
        },
        {
          id: '2',
          date: '2024-07-20',
          veterinarian: 'Dr. David Lee',
          diagnosis: 'Skin allergy - Atopic dermatitis',
          prescription: 'Antihistamines: Benadryl 25mg twice daily, Hydrocortisone cream for affected areas',
          treatmentType: 'Medical Treatment',
          attachments: ['skin_photos.jpg', 'allergy_test.pdf'],
          followUpStatus: 'Completed',
          notes: 'Allergy testing revealed sensitivity to grass pollen. Recommend hypoallergenic diet.'
        },
        {
          id: '3',
          date: '2024-07-15',
          veterinarian: 'Dr. Sarah Jones',
          diagnosis: 'Dental cleaning and examination',
          prescription: 'None required',
          treatmentType: 'Preventive Care',
          attachments: ['dental_xrays.pdf', 'cleaning_photos.jpg'],
          followUpStatus: 'Not Required',
          notes: 'Teeth cleaned successfully. No cavities found. Recommend annual dental check-ups.'
        },
        {
          id: '4',
          date: '2024-07-10',
          veterinarian: 'Dr. Emily Carter',
          diagnosis: 'Annual vaccination',
          prescription: 'DHPP vaccine, Rabies vaccine, Bordetella vaccine',
          treatmentType: 'Vaccination',
          attachments: ['vaccination_record.pdf'],
          followUpStatus: 'Completed',
          notes: 'All vaccines administered successfully. Next vaccination due in 1 year.'
        },
        {
          id: '5',
          date: '2024-07-05',
          veterinarian: 'Dr. David Lee',
          diagnosis: 'Wound care - Laceration on right paw',
          prescription: 'Antibiotics: Amoxicillin 500mg twice daily for 10 days, Wound cleaning solution',
          treatmentType: 'Emergency Treatment',
          attachments: ['wound_photos.jpg', 'xray_paw.pdf'],
          followUpStatus: 'Scheduled',
          notes: 'Wound healing well. Stitches removed. Continue antibiotics as prescribed.'
        }
      ];
      
      this.loading = false;
    }
  }

  onBackToList(): void {
    this.router.navigate(['/treatment']);
  }

  onViewTreatmentDetails(treatmentId: string): void {
    this.router.navigate(['/treatment', treatmentId]);
  }

  onAddNewTreatment(): void {
    this.router.navigate(['/treatment/add'], { 
      queryParams: { animalId: this.animalId } 
    });
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'scheduled':
        return 'status-scheduled';
      case 'in progress':
        return 'status-in-progress';
      case 'not required':
        return 'status-not-required';
      default:
        return 'status-default';
    }
  }

  getNextFollowUp(): string | null {
    const scheduledTreatments = this.treatmentRecords.filter(
      record => record.followUpStatus.toLowerCase() === 'scheduled'
    );
    
    if (scheduledTreatments.length > 0) {
      // Return the most recent scheduled treatment date
      return scheduledTreatments[0].date;
    }
    
    return null;
  }

  trackByRecordId(index: number, record: TreatmentRecord): string {
    return record.id;
  }
} 