/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  ComponentCurrencyPrice,
  componentCurrencyPriceSchema,
} from './componentCurrencyPrice';

export interface ComponentCurrencyPricesResponse {
  currencyPrices: ComponentCurrencyPrice[];
  [key: string]: unknown;
}

export const componentCurrencyPricesResponseSchema: Schema<ComponentCurrencyPricesResponse> = expandoObject(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => componentCurrencyPriceSchema)),
    ],
  }
);
