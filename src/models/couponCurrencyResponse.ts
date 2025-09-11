/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import { CouponCurrency, couponCurrencySchema } from './couponCurrency.js';

export interface CouponCurrencyResponse {
  currencyPrices?: CouponCurrency[];
  [key: string]: unknown;
}

export const couponCurrencyResponseSchema: Schema<CouponCurrencyResponse> = expandoObject(
  {
    currencyPrices: [
      'currency_prices',
      optional(array(lazy(() => couponCurrencySchema))),
    ],
  }
);
