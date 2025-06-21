import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerListComponent } from './owner-list.component';
import { OwnerDetailComponent } from './owner-detail.component';

@NgModule({
  imports: [SharedModule, OwnerRoutingModule, OwnerListComponent, OwnerDetailComponent]
})
export class OwnerModule {}
