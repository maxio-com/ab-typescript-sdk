/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WebhookOrder
 */
export enum WebhookOrder {
  NewestFirst = 'newest_first',
  OldestFirst = 'oldest_first',
}

/**
 * Schema for WebhookOrder
 */
export const webhookOrderSchema: Schema<WebhookOrder> = stringEnum(WebhookOrder);
