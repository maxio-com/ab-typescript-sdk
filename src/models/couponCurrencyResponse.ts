/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { CouponCurrency, couponCurrencySchema } from './couponCurrency';

export interface CouponCurrencyResponse {
  currencyPrices?: CouponCurrency[];
}

export const couponCurrencyResponseSchema: Schema<CouponCurrencyResponse> = object(
  {
    currencyPrices: [
      'currency_prices',
      optional(array(lazy(() => couponCurrencySchema))),
    ],
  }
);
