import { Routes } from '@angular/router';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';
import { AuditLogComponent } from './components/audit-log/audit-log.component';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: SettingsGeneralComponent
  },
  {
    path: 'audit-log',
    component: AuditLogComponent
  }
]; 