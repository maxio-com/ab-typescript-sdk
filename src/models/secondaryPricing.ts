/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import { Price, priceSchema } from './price.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';

/** Hybrid Pricing only. The secondary pricing model that takes over once usage passes the primary model's included threshold. Applies to Quantity-Based and Metered Components on Sites with Hybrid Pricing enabled; ignored otherwise. Its `prices` brackets start at `1`, not at the primary model's highest `ending_quantity`. See [Hybrid Pricing](page:introduction/basic-concepts/hybrid-pricing). */
export interface SecondaryPricing {
  /** Required, unless you send the top-level `secondary_pricing_scheme` instead (Create and Update Component Price Point only). A block with neither returns `422` (`Secondary pricing scheme must be defined`). */
  pricingScheme?: PricingScheme;
  prices?: Price[];
  [key: string]: unknown;
}

export const secondaryPricingSchema: Schema<SecondaryPricing> = lazy(() =>
  expandoObject({
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    prices: ['prices', optional(array(priceSchema))],
  })
);
