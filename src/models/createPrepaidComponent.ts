/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  PrepaidUsageComponent,
  prepaidUsageComponentSchema,
} from './prepaidUsageComponent.js';

export interface CreatePrepaidComponent {
  prepaidUsageComponent: PrepaidUsageComponent;
  [key: string]: unknown;
}

export const createPrepaidComponentSchema: Schema<CreatePrepaidComponent> = expandoObject(
  {
    prepaidUsageComponent: [
      'prepaid_usage_component',
      lazy(() => prepaidUsageComponentSchema),
    ],
  }
);
