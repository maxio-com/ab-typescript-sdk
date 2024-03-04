/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Webhook, webhookSchema } from './webhook';

export interface WebhookResponse {
  webhook?: Webhook;
  [key: string]: unknown;
}

export const webhookResponseSchema: Schema<WebhookResponse> = expandoObject({
  webhook: ['webhook', optional(lazy(() => webhookSchema))],
});
