/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ScheduledRenewalConfiguration,
  scheduledRenewalConfigurationSchema,
} from './scheduledRenewalConfiguration.js';

export interface ScheduledRenewalConfigurationResponse {
  scheduledRenewalConfiguration?: ScheduledRenewalConfiguration;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationResponseSchema: Schema<ScheduledRenewalConfigurationResponse> = lazy(
  () =>
    expandoObject({
      scheduledRenewalConfiguration: [
        'scheduled_renewal_configuration',
        optional(scheduledRenewalConfigurationSchema),
      ],
    })
);
