import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TreatmentRoutingModule } from './treatment-routing.module';
import { TreatmentListComponent } from './treatment-list.component';
import { TreatmentDetailComponent } from './treatment-detail.component';

@NgModule({
  imports: [SharedModule, TreatmentRoutingModule, TreatmentListComponent, TreatmentDetailComponent]
})
export class TreatmentModule {}
