/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface PrepaidProductPricePointFilter {
  /** Passed as a parameter to list methods to return only non null values. */
  productPricePointId: string;
  [key: string]: unknown;
}

export const prepaidProductPricePointFilterSchema: Schema<PrepaidProductPricePointFilter> = expandoObject(
  { productPricePointId: ['product_price_point_id', string()] }
);
