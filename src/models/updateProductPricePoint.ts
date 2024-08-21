/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, optional, Schema, string } from '../schema';

export interface UpdateProductPricePoint {
  handle?: string;
  priceInCents?: bigint;
  [key: string]: unknown;
}

export const updateProductPricePointSchema: Schema<UpdateProductPricePoint> = expandoObject(
  {
    handle: ['handle', optional(string())],
    priceInCents: ['price_in_cents', optional(bigint())],
  }
);
