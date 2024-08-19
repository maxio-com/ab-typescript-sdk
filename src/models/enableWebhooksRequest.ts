/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, Schema } from '../schema';

export interface EnableWebhooksRequest {
  webhooksEnabled: boolean;
  [key: string]: unknown;
}

export const enableWebhooksRequestSchema: Schema<EnableWebhooksRequest> = expandoObject(
  { webhooksEnabled: ['webhooks_enabled', boolean()] }
);
