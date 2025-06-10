import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalListComponent } from './animal-list.component';
import { AnimalDetailComponent } from './animal-detail.component';

@NgModule({
  imports: [SharedModule, AnimalRoutingModule, AnimalListComponent, AnimalDetailComponent]
})
export class AnimalModule {}
