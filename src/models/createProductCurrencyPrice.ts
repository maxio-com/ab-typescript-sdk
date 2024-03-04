/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';
import { CurrencyPriceRole, currencyPriceRoleSchema } from './currencyPriceRole';

export interface CreateProductCurrencyPrice {
  /** ISO code for one of the site level currencies. */
  currency: string;
  /** Price for the given role. */
  price: number;
  /** Role for the price. */
  role: CurrencyPriceRole;
  [key: string]: unknown;
}

export const createProductCurrencyPriceSchema: Schema<CreateProductCurrencyPrice> = expandoObject(
  {
    currency: ['currency', string()],
    price: ['price', number()],
    role: ['role', currencyPriceRoleSchema],
  }
);
