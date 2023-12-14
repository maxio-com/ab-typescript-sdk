/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

/** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
export interface ComponentCustomPrice {
  /** Omit for On/Off components */
  pricingScheme?: PricingScheme;
  /** On/off components only need one price bracket starting at 1 */
  prices?: Price[];
}

export const componentCustomPriceSchema: Schema<ComponentCustomPrice> = object({
  pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
});
