/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface EnableWebhooksResponse {
  webhooksEnabled?: boolean;
}

export const enableWebhooksResponseSchema: Schema<EnableWebhooksResponse> = object(
  { webhooksEnabled: ['webhooks_enabled', optional(boolean())] }
);
