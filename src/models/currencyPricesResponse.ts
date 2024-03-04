/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice';

export interface CurrencyPricesResponse {
  currencyPrices: CurrencyPrice[];
  [key: string]: unknown;
}

export const currencyPricesResponseSchema: Schema<CurrencyPricesResponse> = expandoObject(
  {
    currencyPrices: ['currency_prices', array(lazy(() => currencyPriceSchema))],
  }
);
