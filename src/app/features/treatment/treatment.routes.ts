import { Routes } from '@angular/router';
import { TreatmentListComponent } from './components/treatment-list/treatment-list.component';
import { TreatmentDetailComponent } from './components/treatment-detail/treatment-detail.component';

export const TREATMENT_ROUTES: Routes = [
  {
    path: '',
    component: TreatmentListComponent
  },
  {
    path: 'add',
    component: TreatmentDetailComponent
  },
  {
    path: ':id',
    component: TreatmentDetailComponent
  }
]; 