/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema, string } from '../schema';

export interface UpdateProductPricePoint {
  handle?: string;
  priceInCents?: bigint;
}

export const updateProductPricePointSchema: Schema<UpdateProductPricePoint> = object(
  {
    handle: ['handle', optional(string())],
    priceInCents: ['price_in_cents', optional(bigint())],
  }
);
