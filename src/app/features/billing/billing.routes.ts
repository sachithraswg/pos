import { Routes } from '@angular/router';
import { NewBillComponent } from './components/new-bill/new-bill.component';
import { BillHistoryComponent } from './components/bill-list/bill-history.component';
import { BillDetailComponent } from './components/bill-detail/bill-detail.component';

export const BILLING_ROUTES: Routes = [
  {
    path: '',
    component: NewBillComponent
  },
  {
    path: 'history',
    component: BillHistoryComponent
  },
  {
    path: ':id',
    component: BillDetailComponent
  }
]; 