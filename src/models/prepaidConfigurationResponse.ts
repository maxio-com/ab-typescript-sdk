/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  PrepaidConfiguration,
  prepaidConfigurationSchema,
} from './prepaidConfiguration.js';

export interface PrepaidConfigurationResponse {
  prepaidConfiguration: PrepaidConfiguration;
  [key: string]: unknown;
}

export const prepaidConfigurationResponseSchema: Schema<PrepaidConfigurationResponse> = expandoObject(
  {
    prepaidConfiguration: [
      'prepaid_configuration',
      lazy(() => prepaidConfigurationSchema),
    ],
  }
);
