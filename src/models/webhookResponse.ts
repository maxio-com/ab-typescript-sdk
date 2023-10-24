/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Webhook, webhookSchema } from './webhook';

export interface WebhookResponse {
  webhook?: Webhook;
}

export const webhookResponseSchema: Schema<WebhookResponse> = object({
  webhook: ['webhook', optional(lazy(() => webhookSchema))],
});
