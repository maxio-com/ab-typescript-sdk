/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ReasonCodesJsonResponse {
  ok?: string;
}

export const reasonCodesJsonResponseSchema: Schema<ReasonCodesJsonResponse> = object(
  { ok: ['ok', optional(string())] }
);
