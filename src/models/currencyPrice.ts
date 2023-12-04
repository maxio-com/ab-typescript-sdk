/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { CurrencyPriceRole, currencyPriceRoleSchema } from './currencyPriceRole';

export interface CurrencyPrice {
  id?: number;
  currency?: string;
  price?: number;
  formattedPrice?: string;
  productPricePointId?: number;
  /** Role for the price. */
  role?: CurrencyPriceRole;
}

export const currencyPriceSchema: Schema<CurrencyPrice> = object({
  id: ['id', optional(number())],
  currency: ['currency', optional(string())],
  price: ['price', optional(number())],
  formattedPrice: ['formatted_price', optional(string())],
  productPricePointId: ['product_price_point_id', optional(number())],
  role: ['role', optional(currencyPriceRoleSchema)],
});
