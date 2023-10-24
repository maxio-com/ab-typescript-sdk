/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  PrepaidConfiguration,
  prepaidConfigurationSchema,
} from './prepaidConfiguration';

export interface PrepaidConfigurationResponse {
  prepaidConfiguration: PrepaidConfiguration;
}

export const prepaidConfigurationResponseSchema: Schema<PrepaidConfigurationResponse> = object(
  {
    prepaidConfiguration: [
      'prepaid_configuration',
      lazy(() => prepaidConfigurationSchema),
    ],
  }
);
