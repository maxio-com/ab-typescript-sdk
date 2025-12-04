/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { GroupBilling, groupBillingSchema } from './groupBilling.js';
import { GroupTarget, groupTargetSchema } from './groupTarget.js';

export interface GroupSettings {
  /** Attributes of the target customer who will be the responsible payer of the created subscription. Required. */
  target: GroupTarget;
  /** Optional attributes related to billing date and accrual. Note: Only applicable for new subscriptions. */
  billing?: GroupBilling;
  [key: string]: unknown;
}

export const groupSettingsSchema: Schema<GroupSettings> = lazy(() =>
  expandoObject({
    target: ['target', groupTargetSchema],
    billing: ['billing', optional(groupBillingSchema)],
  })
);
