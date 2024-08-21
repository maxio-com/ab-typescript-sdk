/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';

export interface UpdateCouponCurrency {
  /** ISO code for the site defined currency. */
  currency: string;
  /** Price for the given currency. */
  price: number;
  [key: string]: unknown;
}

export const updateCouponCurrencySchema: Schema<UpdateCouponCurrency> = expandoObject(
  { currency: ['currency', string()], price: ['price', number()] }
);
