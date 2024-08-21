/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WebhookStatus
 */
export enum WebhookStatus {
  Successful = 'successful',
  Failed = 'failed',
  Pending = 'pending',
  Paused = 'paused',
}

/**
 * Schema for WebhookStatus
 */
export const webhookStatusSchema: Schema<WebhookStatus> = stringEnum(
  WebhookStatus
);
