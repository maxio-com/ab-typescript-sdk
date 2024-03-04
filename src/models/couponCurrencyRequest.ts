/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  UpdateCouponCurrency,
  updateCouponCurrencySchema,
} from './updateCouponCurrency';

export interface CouponCurrencyRequest {
  currencyPrices: UpdateCouponCurrency[];
  [key: string]: unknown;
}

export const couponCurrencyRequestSchema: Schema<CouponCurrencyRequest> = expandoObject(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => updateCouponCurrencySchema)),
    ],
  }
);
