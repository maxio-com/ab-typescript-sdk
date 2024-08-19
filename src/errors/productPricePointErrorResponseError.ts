/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ProductPricePointErrors } from '../models/productPricePointErrors';

/**
 * Creates an instance of ProductPricePointErrorResponse
 */
interface ProductPricePointErrorResponse {
  errors: ProductPricePointErrors;
  [key: string]: unknown;
}

export class ProductPricePointErrorResponseError extends ApiError<
  ProductPricePointErrorResponse
> {}
