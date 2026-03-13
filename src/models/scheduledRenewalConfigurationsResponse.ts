/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ScheduledRenewalConfiguration,
  scheduledRenewalConfigurationSchema,
} from './scheduledRenewalConfiguration.js';

export interface ScheduledRenewalConfigurationsResponse {
  scheduledRenewalConfigurations?: ScheduledRenewalConfiguration[];
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationsResponseSchema: Schema<ScheduledRenewalConfigurationsResponse> = lazy(
  () =>
    expandoObject({
      scheduledRenewalConfigurations: [
        'scheduled_renewal_configurations',
        optional(array(scheduledRenewalConfigurationSchema)),
      ],
    })
);
