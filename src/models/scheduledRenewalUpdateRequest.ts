/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ScheduledRenewalUpdateRequestRenewalConfigurationItem,
  scheduledRenewalUpdateRequestRenewalConfigurationItemSchema,
} from './containers/scheduledRenewalUpdateRequestRenewalConfigurationItem.js';

export interface ScheduledRenewalUpdateRequest {
  renewalConfigurationItem: ScheduledRenewalUpdateRequestRenewalConfigurationItem;
  [key: string]: unknown;
}

export const scheduledRenewalUpdateRequestSchema: Schema<ScheduledRenewalUpdateRequest> = lazy(
  () =>
    expandoObject({
      renewalConfigurationItem: [
        'renewal_configuration_item',
        scheduledRenewalUpdateRequestRenewalConfigurationItemSchema,
      ],
    })
);
