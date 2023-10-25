/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ComponentCustomPrice,
  componentCustomPriceSchema,
} from './componentCustomPrice';
import {
  SubscriptionGroupComponentCustomPricePricingScheme,
  subscriptionGroupComponentCustomPricePricingSchemeSchema,
} from './containers/subscriptionGroupComponentCustomPricePricingScheme';
import { Price, priceSchema } from './price';

/** Used in place of `price_point_id` to define a custom price point unique to the subscription. You still need to provide `component_id`. */
export interface SubscriptionGroupComponentCustomPrice {
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: SubscriptionGroupComponentCustomPricePricingScheme;
  prices?: Price[];
  overagePricing?: ComponentCustomPrice[];
}

export const subscriptionGroupComponentCustomPriceSchema: Schema<SubscriptionGroupComponentCustomPrice> = object(
  {
    pricingScheme: [
      'pricing_scheme',
      optional(subscriptionGroupComponentCustomPricePricingSchemeSchema),
    ],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
    overagePricing: [
      'overage_pricing',
      optional(array(lazy(() => componentCustomPriceSchema))),
    ],
  }
);
