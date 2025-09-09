/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema.js';
import {
  WebhookSubscription,
  webhookSubscriptionSchema,
} from './webhookSubscription.js';

/** Used to Create or Update Endpoint */
export interface CreateOrUpdateEndpoint {
  url: string;
  webhookSubscriptions: WebhookSubscription[];
  [key: string]: unknown;
}

export const createOrUpdateEndpointSchema: Schema<CreateOrUpdateEndpoint> = expandoObject(
  {
    url: ['url', string()],
    webhookSubscriptions: [
      'webhook_subscriptions',
      array(webhookSubscriptionSchema),
    ],
  }
);
