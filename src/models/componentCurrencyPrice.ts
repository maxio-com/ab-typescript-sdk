/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ComponentCurrencyPrice {
  id?: number;
  currency?: string;
  price?: string;
  formattedPrice?: string;
  priceId?: number;
  pricePointId?: number;
  [key: string]: unknown;
}

export const componentCurrencyPriceSchema: Schema<ComponentCurrencyPrice> = expandoObject(
  {
    id: ['id', optional(number())],
    currency: ['currency', optional(string())],
    price: ['price', optional(string())],
    formattedPrice: ['formatted_price', optional(string())],
    priceId: ['price_id', optional(number())],
    pricePointId: ['price_point_id', optional(number())],
  }
);
