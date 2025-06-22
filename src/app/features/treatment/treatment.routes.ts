import { Routes } from '@angular/router';
import { TreatmentListComponent } from './components/treatment-list/treatment-list.component';
import { AddTreatmentDetailsComponent } from './components/add-treatment-details/add-treatment-details.component';
import { TreatmentHistoryComponent } from './components/treatment-history/treatment-history.component';

export const TREATMENT_ROUTES: Routes = [
  {
    path: '',
    component: TreatmentListComponent
  },
  {
    path: 'add',
    component: AddTreatmentDetailsComponent
  },
  {
    path: 'history/:animalId',
    component: TreatmentHistoryComponent
  },
  {
    path: ':id',
    component: AddTreatmentDetailsComponent
  }
]; 