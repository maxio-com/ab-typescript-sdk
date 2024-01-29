/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ComponentCurrencyPrice {
  id?: number;
  currency?: string;
  price?: string;
  formattedPrice?: string;
  priceId?: number;
  pricePointId?: number;
}

export const componentCurrencyPriceSchema: Schema<ComponentCurrencyPrice> = object(
  {
    id: ['id', optional(number())],
    currency: ['currency', optional(string())],
    price: ['price', optional(string())],
    formattedPrice: ['formatted_price', optional(string())],
    priceId: ['price_id', optional(number())],
    pricePointId: ['price_point_id', optional(number())],
  }
);
