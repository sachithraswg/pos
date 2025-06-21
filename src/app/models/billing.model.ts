export interface Billing {
  id: string;
  invoiceNumber: string;
  amount: number;
  tax: number;
  total: number;
  status: BillingStatus;
  customerId: string;
  items: BillingItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface BillingItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export enum BillingStatus {
  PENDING = 'pending',
  PAID = 'paid',
  CANCELLED = 'cancelled'
}
