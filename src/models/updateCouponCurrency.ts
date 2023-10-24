/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface UpdateCouponCurrency {
  /** ISO code for the site defined currency. */
  currency: string;
  /** Price for the given currency. */
  price: number;
}

export const updateCouponCurrencySchema: Schema<UpdateCouponCurrency> = object({
  currency: ['currency', string()],
  price: ['price', number()],
});
