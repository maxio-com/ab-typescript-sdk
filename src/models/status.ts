/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for Status
 */
export enum Status {
  Draft = 'draft',
  Scheduled = 'scheduled',
  Pending = 'pending',
  Canceled = 'canceled',
  Active = 'active',
  Fulfilled = 'fulfilled',
}

/**
 * Schema for Status
 */
export const statusSchema: Schema<Status> = stringEnum(Status);
