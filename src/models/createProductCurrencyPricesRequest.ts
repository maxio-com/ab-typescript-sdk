/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateProductCurrencyPrice,
  createProductCurrencyPriceSchema,
} from './createProductCurrencyPrice.js';

export interface CreateProductCurrencyPricesRequest {
  currencyPrices: CreateProductCurrencyPrice[];
  [key: string]: unknown;
}

export const createProductCurrencyPricesRequestSchema: Schema<CreateProductCurrencyPricesRequest> = expandoObject(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => createProductCurrencyPriceSchema)),
    ],
  }
);
