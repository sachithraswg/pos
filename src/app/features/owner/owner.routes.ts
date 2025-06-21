import { Routes } from '@angular/router';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerDetailComponent } from './components/owner-detail/owner-detail.component';

export const OWNER_ROUTES: Routes = [
  {
    path: '',
    component: OwnerListComponent
  },
  {
    path: ':id',
    component: OwnerDetailComponent
  }
]; 