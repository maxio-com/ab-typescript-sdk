/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ScheduledRenewalConfigurationItemRequestRenewalConfigurationItem,
  scheduledRenewalConfigurationItemRequestRenewalConfigurationItemSchema,
} from './containers/scheduledRenewalConfigurationItemRequestRenewalConfigurationItem.js';

export interface ScheduledRenewalConfigurationItemRequest {
  renewalConfigurationItem: ScheduledRenewalConfigurationItemRequestRenewalConfigurationItem;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationItemRequestSchema: Schema<ScheduledRenewalConfigurationItemRequest> = lazy(
  () =>
    expandoObject({
      renewalConfigurationItem: [
        'renewal_configuration_item',
        scheduledRenewalConfigurationItemRequestRenewalConfigurationItemSchema,
      ],
    })
);
