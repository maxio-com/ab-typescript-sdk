/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  optional,
  Schema,
} from '../schema.js';
import { Price, priceSchema } from './price.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';

/** Custom pricing for a component within a scheduled renewal. */
export interface ScheduledRenewalComponentCustomPrice {
  /** Whether or not the price point includes tax */
  taxIncluded?: boolean;
  /** Omit for On/Off components */
  pricingScheme: PricingScheme;
  /** On/off components only need one price bracket starting at 1. */
  prices: Price[];
  [key: string]: unknown;
}

export const scheduledRenewalComponentCustomPriceSchema: Schema<ScheduledRenewalComponentCustomPrice> = lazy(
  () =>
    expandoObject({
      taxIncluded: ['tax_included', optional(boolean())],
      pricingScheme: ['pricing_scheme', pricingSchemeSchema],
      prices: ['prices', array(priceSchema)],
    })
);
