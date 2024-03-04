/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface ReasonCodesJsonResponse {
  ok?: string;
  [key: string]: unknown;
}

export const reasonCodesJsonResponseSchema: Schema<ReasonCodesJsonResponse> = expandoObject(
  { ok: ['ok', optional(string())] }
);
