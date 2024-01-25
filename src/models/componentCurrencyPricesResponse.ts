/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  ComponentCurrencyPrice,
  componentCurrencyPriceSchema,
} from './componentCurrencyPrice';

export interface ComponentCurrencyPricesResponse {
  currencyPrices: ComponentCurrencyPrice[];
}

export const componentCurrencyPricesResponseSchema: Schema<ComponentCurrencyPricesResponse> = object(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => componentCurrencyPriceSchema)),
    ],
  }
);
