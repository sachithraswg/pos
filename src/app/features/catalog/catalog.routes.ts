import { Routes } from '@angular/router';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './components/catalog-detail/catalog-detail.component';

export const CATALOG_ROUTES: Routes = [
  {
    path: '',
    component: CatalogListComponent
  },
  {
    path: ':id',
    component: CatalogDetailComponent
  }
]; 