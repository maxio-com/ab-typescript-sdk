/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status
 */
export enum Status {
  Draft = 'draft',
  Open = 'open',
  Paid = 'paid',
  Pending = 'pending',
  Voided = 'voided',
  Canceled = 'canceled',
}

/**
 * Schema for Status
 */
export const statusSchema: Schema<Status> = stringEnum(Status);
