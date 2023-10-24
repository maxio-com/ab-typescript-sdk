/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface Endpoint {
  id?: number;
  url?: string;
  siteId?: number;
  status?: string;
  webhookSubscriptions?: string[];
}

export const endpointSchema: Schema<Endpoint> = object({
  id: ['id', optional(number())],
  url: ['url', optional(string())],
  siteId: ['site_id', optional(number())],
  status: ['status', optional(string())],
  webhookSubscriptions: ['webhook_subscriptions', optional(array(string()))],
});
