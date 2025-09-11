/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateCurrencyPrice,
  createCurrencyPriceSchema,
} from './createCurrencyPrice.js';

export interface CreateCurrencyPricesRequest {
  currencyPrices: CreateCurrencyPrice[];
  [key: string]: unknown;
}

export const createCurrencyPricesRequestSchema: Schema<CreateCurrencyPricesRequest> = expandoObject(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => createCurrencyPriceSchema)),
    ],
  }
);
