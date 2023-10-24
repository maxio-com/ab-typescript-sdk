/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  UpdateCurrencyPrice,
  updateCurrencyPriceSchema,
} from './updateCurrencyPrice';

export interface UpdateCurrencyPricesRequest {
  currencyPrices: UpdateCurrencyPrice[];
}

export const updateCurrencyPricesRequestSchema: Schema<UpdateCurrencyPricesRequest> = object(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => updateCurrencyPriceSchema)),
    ],
  }
);
