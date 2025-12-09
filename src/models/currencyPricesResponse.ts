/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice.js';

export interface CurrencyPricesResponse {
  currencyPrices: CurrencyPrice[];
  [key: string]: unknown;
}

export const currencyPricesResponseSchema: Schema<CurrencyPricesResponse> = lazy(
  () =>
    expandoObject({
      currencyPrices: ['currency_prices', array(currencyPriceSchema)],
    })
);
