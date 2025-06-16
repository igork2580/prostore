'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

//Get latest products
export async function getLatestProducts() {
  try {
    const products = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: {
        createdAt: 'desc',
      },});
    return convertToPlainObject(products);
  } catch (error) {
    console.error('Error fetching latest products:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Get single product by slug
export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    return convertToPlainObject(product);
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
