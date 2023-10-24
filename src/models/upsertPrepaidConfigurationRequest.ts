/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpsertPrepaidConfiguration,
  upsertPrepaidConfigurationSchema,
} from './upsertPrepaidConfiguration';

export interface UpsertPrepaidConfigurationRequest {
  prepaidConfiguration: UpsertPrepaidConfiguration;
}

export const upsertPrepaidConfigurationRequestSchema: Schema<UpsertPrepaidConfigurationRequest> = object(
  {
    prepaidConfiguration: [
      'prepaid_configuration',
      lazy(() => upsertPrepaidConfigurationSchema),
    ],
  }
);
