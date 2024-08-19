/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema';

export interface EnableWebhooksResponse {
  webhooksEnabled?: boolean;
  [key: string]: unknown;
}

export const enableWebhooksResponseSchema: Schema<EnableWebhooksResponse> = expandoObject(
  { webhooksEnabled: ['webhooks_enabled', optional(boolean())] }
);
