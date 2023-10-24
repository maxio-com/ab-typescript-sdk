/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Price, priceSchema } from './price';

export interface ComponentPricePointItem {
  name?: string;
  handle?: string;
  pricingScheme?: string;
  prices?: Price[];
}

export const componentPricePointItemSchema: Schema<ComponentPricePointItem> = object(
  {
    name: ['name', optional(string())],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', optional(string())],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
  }
);
