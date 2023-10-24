/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { OveragePricing, overagePricingSchema } from './overagePricing';
import { Price, priceSchema } from './price';

export interface PrepaidComponentPricePoint {
  name?: string;
  handle?: string;
  pricingScheme?: string;
  prices?: Price[];
  overagePricing?: OveragePricing;
}

export const prepaidComponentPricePointSchema: Schema<PrepaidComponentPricePoint> = object(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', optional(string())],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
    overagePricing: [
      'overage_pricing',
      optional(lazy(() => overagePricingSchema)),
    ],
  }
);
