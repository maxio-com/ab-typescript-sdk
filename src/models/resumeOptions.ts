/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface ResumeOptions {
  /** Chargify will only attempt to resume the subscription's billing period. If not resumable, the subscription will be left in it's current state. */
  requireResume?: boolean;
  /** Indicates whether or not Chargify should clear the subscription's existing balance before attempting to resume the subscription. If subscription cannot be resumed, the balance will remain as it was before the attempt to resume was made. */
  forgiveBalance?: boolean;
}

export const resumeOptionsSchema: Schema<ResumeOptions> = object({
  requireResume: ['require_resume', optional(boolean())],
  forgiveBalance: ['forgive_balance', optional(boolean())],
});
