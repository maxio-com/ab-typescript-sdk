/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema } from '../schema';

export interface EnableWebhooksRequest {
  webhooksEnabled: boolean;
}

export const enableWebhooksRequestSchema: Schema<EnableWebhooksRequest> = object(
  { webhooksEnabled: ['webhooks_enabled', boolean()] }
);
