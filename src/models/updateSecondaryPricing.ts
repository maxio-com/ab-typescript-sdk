/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';
import { UpdatePrice, updatePriceSchema } from './updatePrice.js';

/** Hybrid Pricing only. Changes the secondary pricing model of an existing hybrid price point. Send `pricing_scheme` (or the top-level `secondary_pricing_scheme`) every time you send this block; a block without a scheme returns `422`. Brackets sent without an `id` are added to the existing ones rather than replacing them, so to change a bracket set, update existing brackets by `id` and remove the ones you no longer want with `_destroy: true`. See [Hybrid Pricing](page:introduction/basic-concepts/hybrid-pricing). */
export interface UpdateSecondaryPricing {
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  prices?: UpdatePrice[];
  [key: string]: unknown;
}

export const updateSecondaryPricingSchema: Schema<UpdateSecondaryPricing> = lazy(
  () =>
    expandoObject({
      pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
      prices: ['prices', optional(array(updatePriceSchema))],
    })
);
