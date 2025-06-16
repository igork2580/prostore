import { z } from 'zod';
import { insertProductSchema } from '@/lib/validators';

export type Product = z.infer<typeof insertProductSchema> &{
  id: string;   // Unique identifier for the product
  rating: string; // Average rating of the product
  createdAt: Date; // Timestamp of when the product was created
};