import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsGeneralComponent } from './settings-general.component';
import { AuditLogComponent } from './audit-log.component';

@NgModule({
  imports: [SharedModule, SettingsRoutingModule, SettingsGeneralComponent, AuditLogComponent]
})
export class SettingsModule {}
