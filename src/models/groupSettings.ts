/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { GroupBilling, groupBillingSchema } from './groupBilling';
import { GroupTarget, groupTargetSchema } from './groupTarget';

export interface GroupSettings {
  /** Attributes of the target customer who will be the responsible payer of the created subscription. Required. */
  target: GroupTarget;
  /** Optional attributes related to billing date and accrual. Note: Only applicable for new subscriptions. */
  billing?: GroupBilling;
}

export const groupSettingsSchema: Schema<GroupSettings> = object({
  target: ['target', lazy(() => groupTargetSchema)],
  billing: ['billing', optional(lazy(() => groupBillingSchema))],
});
