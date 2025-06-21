export interface Settings {
  id: string;
  clinicName: string;
  address: string;
  phone: string;
  email: string;
  taxRate: number;
  currency: string;
  timezone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
