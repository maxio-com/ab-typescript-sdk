/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  UpdateCouponCurrency,
  updateCouponCurrencySchema,
} from './updateCouponCurrency.js';

export interface CouponCurrencyRequest {
  currencyPrices: UpdateCouponCurrency[];
  [key: string]: unknown;
}

export const couponCurrencyRequestSchema: Schema<CouponCurrencyRequest> = lazy(
  () =>
    expandoObject({
      currencyPrices: ['currency_prices', array(updateCouponCurrencySchema)],
    })
);
