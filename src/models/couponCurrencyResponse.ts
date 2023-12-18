/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice';

export interface CouponCurrencyResponse {
  offers?: CurrencyPrice[];
}

export const couponCurrencyResponseSchema: Schema<CouponCurrencyResponse> = object(
  { offers: ['offers', optional(array(lazy(() => currencyPriceSchema)))] }
);
