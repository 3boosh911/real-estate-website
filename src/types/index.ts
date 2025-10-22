export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'owner' | 'agent';
  createdAt: Date;
  updatedAt: Date;
}

export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  type: 'apartment' | 'villa' | 'land' | 'shop';
  status: 'sale' | 'rent';
  city: string;
  district?: string;
  address?: string;
  areaSqm?: number;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
  published: boolean;
  listedAt: Date;
  updatedAt: Date;
  latitude?: number;
  longitude?: number;
  agentId?: string;
  agent?: User;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
  alt?: string;
  propertyId: string;
  order: number;
  createdAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  propertyId?: string;
  createdAt: Date;
  read: boolean;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: 'create' | 'update' | 'delete';
  entity: string;
  entityId: string;
  changes?: string;
  createdAt: Date;
}

export interface PropertyFilters {
  city?: string;
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
  bathrooms?: number;
  features?: string[];
}

export interface SearchParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: 'price' | 'area' | 'listedAt';
  sortOrder?: 'asc' | 'desc';
}

