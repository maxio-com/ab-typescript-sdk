/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  CreateProductCurrencyPrice,
  createProductCurrencyPriceSchema,
} from './createProductCurrencyPrice';

export interface CreateProductCurrencyPricesRequest {
  currencyPrices: CreateProductCurrencyPrice[];
}

export const createProductCurrencyPricesRequestSchema: Schema<CreateProductCurrencyPricesRequest> = object(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => createProductCurrencyPriceSchema)),
    ],
  }
);
