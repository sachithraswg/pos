import { Routes } from '@angular/router';
import { PetOwnerListComponent } from './components/pet-owner-list/pet-owner-list.component';
import { PetOwnerDetailComponent } from './components/pet-owner-detail/pet-owner-detail.component';

export const PET_OWNERS_ROUTES: Routes = [
  {
    path: '',
    component: PetOwnerListComponent
  },
  {
    path: ':id',
    component: PetOwnerDetailComponent
  }
]; 