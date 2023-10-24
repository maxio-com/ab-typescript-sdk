/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';
import {
  WebhookSubscription,
  webhookSubscriptionSchema,
} from './webhookSubscription';

/** Used to Create or Update Endpoint */
export interface UpdateEndpoint {
  url: string;
  webhookSubscriptions: WebhookSubscription[];
}

export const updateEndpointSchema: Schema<UpdateEndpoint> = object({
  url: ['url', string()],
  webhookSubscriptions: [
    'webhook_subscriptions',
    array(webhookSubscriptionSchema),
  ],
});
