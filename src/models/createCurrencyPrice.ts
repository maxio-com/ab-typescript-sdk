/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface CreateCurrencyPrice {
  /** ISO code for a currency defined on the site level */
  currency?: string;
  /** Price for the price level in this currency */
  price?: number;
  /** ID of the price that this corresponds with */
  priceId?: number;
  [key: string]: unknown;
}

export const createCurrencyPriceSchema: Schema<CreateCurrencyPrice> = expandoObject(
  {
    currency: ['currency', optional(string())],
    price: ['price', optional(number())],
    priceId: ['price_id', optional(number())],
  }
);
