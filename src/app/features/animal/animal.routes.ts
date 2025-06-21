import { Routes } from '@angular/router';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

export const ANIMAL_ROUTES: Routes = [
  {
    path: '',
    component: AnimalListComponent
  },
  {
    path: ':id',
    component: AnimalDetailComponent
  }
]; 