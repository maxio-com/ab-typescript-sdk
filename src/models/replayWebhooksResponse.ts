/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface ReplayWebhooksResponse {
  status?: string;
  [key: string]: unknown;
}

export const replayWebhooksResponseSchema: Schema<ReplayWebhooksResponse> = expandoObject(
  { status: ['status', optional(string())] }
);
