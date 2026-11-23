/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface ComponentCurrencyPrice {
  /** The ID of the stored currency price. This is `null` when the price point uses the site exchange rate (`use_site_exchange_rate: true`), because the price is calculated from the rate and is not stored. */
  id?: number | null;
  currency?: string;
  price?: string;
  formattedPrice?: string;
  priceId?: number;
  pricePointId?: number;
  [key: string]: unknown;
}

export const componentCurrencyPriceSchema: Schema<ComponentCurrencyPrice> = expandoObject(
  {
    id: ['id', optional(nullable(number()))],
    currency: ['currency', optional(string())],
    price: ['price', optional(string())],
    formattedPrice: ['formatted_price', optional(string())],
    priceId: ['price_id', optional(number())],
    pricePointId: ['price_point_id', optional(number())],
  }
);
