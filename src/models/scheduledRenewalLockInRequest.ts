/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema.js';

export interface ScheduledRenewalLockInRequest {
  /** Date to lock in the renewal. */
  lockInAt: string;
  [key: string]: unknown;
}

export const scheduledRenewalLockInRequestSchema: Schema<ScheduledRenewalLockInRequest> = expandoObject(
  { lockInAt: ['lock_in_at', string()] }
);
