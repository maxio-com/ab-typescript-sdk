/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  PrepaidUsageComponent,
  prepaidUsageComponentSchema,
} from './prepaidUsageComponent';

export interface CreatePrepaidComponent {
  prepaidUsageComponent: PrepaidUsageComponent;
}

export const createPrepaidComponentSchema: Schema<CreatePrepaidComponent> = object(
  {
    prepaidUsageComponent: [
      'prepaid_usage_component',
      lazy(() => prepaidUsageComponentSchema),
    ],
  }
);
