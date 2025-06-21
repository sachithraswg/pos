export interface Report {
  id: string;
  title: string;
  description: string;
  type: ReportType;
  data: Record<string, unknown>;
  generatedAt: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ReportType {
  SALES = 'sales',
  INVENTORY = 'inventory',
  PATIENT = 'patient',
  FINANCIAL = 'financial'
}
