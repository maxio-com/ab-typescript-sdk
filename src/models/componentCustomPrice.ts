/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ComponentCustomPricePricingScheme,
  componentCustomPricePricingSchemeSchema,
} from './containers/componentCustomPricePricingScheme';
import { Price, priceSchema } from './price';

/** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
export interface ComponentCustomPrice {
  /** Omit for On/Off components */
  pricingScheme?: ComponentCustomPricePricingScheme;
  /** On/off components only need one price bracket starting at 1 */
  prices?: Price[];
}

export const componentCustomPriceSchema: Schema<ComponentCustomPrice> = object({
  pricingScheme: [
    'pricing_scheme',
    optional(componentCustomPricePricingSchemeSchema),
  ],
  prices: ['prices', optional(array(lazy(() => priceSchema)))],
});
