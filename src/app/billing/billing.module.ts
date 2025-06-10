import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { NewBillComponent } from './new-bill.component';
import { BillHistoryComponent } from './bill-history.component';
import { BillDetailComponent } from './bill-detail.component';

@NgModule({
  imports: [SharedModule, BillingRoutingModule, NewBillComponent, BillHistoryComponent, BillDetailComponent]
})
export class BillingModule {}
