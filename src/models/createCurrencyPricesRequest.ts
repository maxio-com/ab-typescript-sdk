/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  CreateCurrencyPrice,
  createCurrencyPriceSchema,
} from './createCurrencyPrice';

export interface CreateCurrencyPricesRequest {
  currencyPrices: CreateCurrencyPrice[];
}

export const createCurrencyPricesRequestSchema: Schema<CreateCurrencyPricesRequest> = object(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => createCurrencyPriceSchema)),
    ],
  }
);
