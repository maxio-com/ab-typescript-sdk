/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ComponentCostDataRateTier,
  componentCostDataRateTierSchema,
} from './componentCostDataRateTier';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface ComponentCostData {
  componentCodeId?: number | null;
  pricePointId?: number;
  productId?: number;
  quantity?: string;
  amount?: string;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme?: PricingScheme;
  tiers?: ComponentCostDataRateTier[];
  [key: string]: unknown;
}

export const componentCostDataSchema: Schema<ComponentCostData> = expandoObject(
  {
    componentCodeId: ['component_code_id', optional(nullable(number()))],
    pricePointId: ['price_point_id', optional(number())],
    productId: ['product_id', optional(number())],
    quantity: ['quantity', optional(string())],
    amount: ['amount', optional(string())],
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    tiers: [
      'tiers',
      optional(array(lazy(() => componentCostDataRateTierSchema))),
    ],
  }
);
