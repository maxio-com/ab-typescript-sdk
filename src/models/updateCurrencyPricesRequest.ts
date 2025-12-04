/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  UpdateCurrencyPrice,
  updateCurrencyPriceSchema,
} from './updateCurrencyPrice.js';

export interface UpdateCurrencyPricesRequest {
  currencyPrices: UpdateCurrencyPrice[];
  [key: string]: unknown;
}

export const updateCurrencyPricesRequestSchema: Schema<UpdateCurrencyPricesRequest> = lazy(
  () =>
    expandoObject({
      currencyPrices: ['currency_prices', array(updateCurrencyPriceSchema)],
    })
);
