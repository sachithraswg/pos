import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list.component';
import { CatalogDetailComponent } from './catalog-detail.component';

@NgModule({
  imports: [SharedModule, CatalogRoutingModule, CatalogListComponent, CatalogDetailComponent]
})
export class CatalogModule {}
