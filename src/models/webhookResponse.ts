/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { Webhook, webhookSchema } from './webhook.js';

export interface WebhookResponse {
  webhook?: Webhook;
  [key: string]: unknown;
}

export const webhookResponseSchema: Schema<WebhookResponse> = lazy(() =>
  expandoObject({ webhook: ['webhook', optional(webhookSchema)] })
);
