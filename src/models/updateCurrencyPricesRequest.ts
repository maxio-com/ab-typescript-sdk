/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  UpdateCurrencyPrice,
  updateCurrencyPriceSchema,
} from './updateCurrencyPrice';

export interface UpdateCurrencyPricesRequest {
  currencyPrices: UpdateCurrencyPrice[];
  [key: string]: unknown;
}

export const updateCurrencyPricesRequestSchema: Schema<UpdateCurrencyPricesRequest> = expandoObject(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => updateCurrencyPriceSchema)),
    ],
  }
);
