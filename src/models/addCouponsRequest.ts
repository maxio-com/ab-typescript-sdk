/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface AddCouponsRequest {
  codes?: string[];
  [key: string]: unknown;
}

export const addCouponsRequestSchema: Schema<AddCouponsRequest> = expandoObject(
  { codes: ['codes', optional(array(string()))] }
);
