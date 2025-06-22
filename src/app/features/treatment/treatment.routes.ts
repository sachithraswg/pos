import { Routes } from '@angular/router';
import { TreatmentListComponent } from './components/treatment-list/treatment-list.component';
import { AddTreatmentDetailsComponent } from './components/add-treatment-details/add-treatment-details.component';

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
    path: ':id',
    component: AddTreatmentDetailsComponent
  }
]; 