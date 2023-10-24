/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface CouponSubcodesResponse {
  createdCodes?: string[];
  duplicateCodes?: string[];
  invalidCodes?: string[];
}

export const couponSubcodesResponseSchema: Schema<CouponSubcodesResponse> = object(
  {
    createdCodes: ['created_codes', optional(array(string()))],
    duplicateCodes: ['duplicate_codes', optional(array(string()))],
    invalidCodes: ['invalid_codes', optional(array(string()))],
  }
);
