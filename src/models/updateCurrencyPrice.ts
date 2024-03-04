/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema } from '../schema';

export interface UpdateCurrencyPrice {
  /** ID of the currency price record being updated */
  id: number;
  /** New price for the given currency */
  price: number;
  [key: string]: unknown;
}

export const updateCurrencyPriceSchema: Schema<UpdateCurrencyPrice> = expandoObject(
  { id: ['id', number()], price: ['price', number()] }
);
