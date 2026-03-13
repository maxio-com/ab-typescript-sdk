/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ScheduledRenewalConfigurationRequestBody,
  scheduledRenewalConfigurationRequestBodySchema,
} from './scheduledRenewalConfigurationRequestBody.js';

export interface ScheduledRenewalConfigurationRequest {
  renewalConfiguration: ScheduledRenewalConfigurationRequestBody;
  [key: string]: unknown;
}

export const scheduledRenewalConfigurationRequestSchema: Schema<ScheduledRenewalConfigurationRequest> = lazy(
  () =>
    expandoObject({
      renewalConfiguration: [
        'renewal_configuration',
        scheduledRenewalConfigurationRequestBodySchema,
      ],
    })
);
