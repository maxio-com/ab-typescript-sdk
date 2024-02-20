import {
  ProductFamiliesController,
  ProductsController,
} from 'advanced-billing-sdk';
import { createClient } from '../config';
import { uid } from 'uid';
import { product } from '../mocks/products';

export interface ProductConfig {
  productFamilyName?: string;
  productHandle?: string;
  customerReference?: string;
}

export default async function createProduct({
  productFamilyName = uid(),
  productHandle = uid(),
}: ProductConfig) {
  const client = createClient();
  const productFamiliesController = new ProductFamiliesController(client);
  const productsController = new ProductsController(client);
  const productFamilyResponse = (
    await productFamiliesController.createProductFamily({
      productFamily: {
        name: productFamilyName,
        description: 'generic product family',
      },
    })
  ).result;

  const productResponse = (
    await productsController.createProduct(
      productFamilyResponse.productFamily?.id || 0,
      {
        product: { ...product, handle: productHandle },
      }
    )
  ).result;

  return { productResponse, productFamilyResponse };
}
