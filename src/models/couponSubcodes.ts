/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface CouponSubcodes {
  codes?: string[];
  [key: string]: unknown;
}

export const couponSubcodesSchema: Schema<CouponSubcodes> = expandoObject({
  codes: ['codes', optional(array(string()))],
});
