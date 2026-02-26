/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ScheduledRenewalConfigurationItem,
  scheduledRenewalConfigurationItemSchema,
} from './scheduledRenewalConfigurationItem.js';

export interface ScheduledRenewalConfigurationItemResponse {
  scheduledRenewalConfigurationItem?: ScheduledRenewalConfigurationItem;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationItemResponseSchema: Schema<ScheduledRenewalConfigurationItemResponse> = lazy(
  () =>
    expandoObject({
      scheduledRenewalConfigurationItem: [
        'scheduled_renewal_configuration_item',
        optional(scheduledRenewalConfigurationItemSchema),
      ],
    })
);
