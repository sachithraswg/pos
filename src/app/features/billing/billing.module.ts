import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { NewBillComponent } from './components/new-bill/new-bill.component';
import { BillHistoryComponent } from './components/bill-list/bill-history.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';

@NgModule({
  imports: [SharedModule, BillingRoutingModule, NewBillComponent, BillHistoryComponent, BillDetailComponent]
})
export class BillingModule {}
