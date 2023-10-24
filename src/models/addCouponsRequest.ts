/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface AddCouponsRequest {
  codes?: string[];
}

export const addCouponsRequestSchema: Schema<AddCouponsRequest> = object({
  codes: ['codes', optional(array(string()))],
});
