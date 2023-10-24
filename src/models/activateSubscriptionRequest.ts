/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema } from '../schema';

export interface ActivateSubscriptionRequest {
  /** You may choose how to handle the activation failure. `true` means do not change the subscription’s state and billing period. `false`  means to continue through with the activation and enter an end of life state. If this parameter is omitted or `null` is passed it will default to value set in the  site settings (default: `true`) */
  revertOnFailure?: boolean | null;
}

export const activateSubscriptionRequestSchema: Schema<ActivateSubscriptionRequest> = object(
  { revertOnFailure: ['revert_on_failure', optional(nullable(boolean()))] }
);
