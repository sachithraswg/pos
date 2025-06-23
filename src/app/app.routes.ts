import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/user-management/user-management.routes').then(m => m.USER_MANAGEMENT_ROUTES)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./features/user-management/user-management.routes').then(m => m.USER_MANAGEMENT_ROUTES)
  },
  {
    path: 'animal',
    loadChildren: () => import('./features/animal/animal.routes').then(m => m.ANIMAL_ROUTES)
  },
  {
    path: 'billing',
    loadChildren: () => import('./features/billing/billing.routes').then(m => m.BILLING_ROUTES)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./features/catalog/catalog.routes').then(m => m.CATALOG_ROUTES)
  },
  {
    path: 'pet-owners',
    loadChildren: () => import('./features/pet-owners/pet-owners.routes').then(m => m.PET_OWNERS_ROUTES)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./features/reporting/reporting.routes').then(m => m.REPORTING_ROUTES)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings/settings.routes').then(m => m.SETTINGS_ROUTES)
  },
  {
    path: 'treatment',
    loadChildren: () => import('./features/treatment/treatment.routes').then(m => m.TREATMENT_ROUTES)
  }
]; 