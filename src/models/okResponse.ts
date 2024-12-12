/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface OkResponse {
  ok?: string;
  [key: string]: unknown;
}

export const okResponseSchema: Schema<OkResponse> = expandoObject({
  ok: ['ok', optional(string())],
});
