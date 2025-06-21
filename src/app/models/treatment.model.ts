export interface Treatment {
  id: string;
  animalId: string;
  description: string;
  diagnosis: string;
  prescription: string;
  cost: number;
  status: TreatmentStatus;
  scheduledDate: Date;
  completedDate?: Date;
  veterinarianId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum TreatmentStatus {
  SCHEDULED = 'scheduled',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}
