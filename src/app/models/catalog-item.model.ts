export interface CatalogItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sku: string;
  stockQuantity: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
