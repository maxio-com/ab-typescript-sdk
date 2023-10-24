/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  UpdateCouponCurrency,
  updateCouponCurrencySchema,
} from './updateCouponCurrency';

export interface CouponCurrencyRequest {
  currencyPrices: UpdateCouponCurrency[];
}

export const couponCurrencyRequestSchema: Schema<CouponCurrencyRequest> = object(
  {
    currencyPrices: [
      'currency_prices',
      array(lazy(() => updateCouponCurrencySchema)),
    ],
  }
);
