/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  UpsertPrepaidConfiguration,
  upsertPrepaidConfigurationSchema,
} from './upsertPrepaidConfiguration.js';

export interface UpsertPrepaidConfigurationRequest {
  prepaidConfiguration: UpsertPrepaidConfiguration;
  [key: string]: unknown;
}

export const upsertPrepaidConfigurationRequestSchema: Schema<UpsertPrepaidConfigurationRequest> = lazy(
  () =>
    expandoObject({
      prepaidConfiguration: [
        'prepaid_configuration',
        upsertPrepaidConfigurationSchema,
      ],
    })
);
