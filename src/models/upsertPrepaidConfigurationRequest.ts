/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  UpsertPrepaidConfiguration,
  upsertPrepaidConfigurationSchema,
} from './upsertPrepaidConfiguration';

export interface UpsertPrepaidConfigurationRequest {
  prepaidConfiguration: UpsertPrepaidConfiguration;
  [key: string]: unknown;
}

export const upsertPrepaidConfigurationRequestSchema: Schema<UpsertPrepaidConfigurationRequest> = expandoObject(
  {
    prepaidConfiguration: [
      'prepaid_configuration',
      lazy(() => upsertPrepaidConfigurationSchema),
    ],
  }
);
