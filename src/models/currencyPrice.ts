/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface CurrencyPrice {
  id?: number;
  currency?: string;
  price?: number;
  formattedPrice?: string;
  priceId?: number;
  pricePointId?: number;
}

export const currencyPriceSchema: Schema<CurrencyPrice> = object({
  id: ['id', optional(number())],
  currency: ['currency', optional(string())],
  price: ['price', optional(number())],
  formattedPrice: ['formatted_price', optional(string())],
  priceId: ['price_id', optional(number())],
  pricePointId: ['price_point_id', optional(number())],
});
