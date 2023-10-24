/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ReplayWebhooksResponse {
  status?: string;
}

export const replayWebhooksResponseSchema: Schema<ReplayWebhooksResponse> = object(
  { status: ['status', optional(string())] }
);
