import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./features/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./features/animal/animal.module').then(m => m.AnimalModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./features/billing/billing.module').then(m => m.BillingModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./features/owner/owner.module').then(m => m.OwnerModule)
  },
  {
    path: 'reporting',
    loadChildren: () => import('./features/reporting/reporting.module').then(m => m.ReportingModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'treatment',
    loadChildren: () => import('./features/treatment/treatment.module').then(m => m.TreatmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
