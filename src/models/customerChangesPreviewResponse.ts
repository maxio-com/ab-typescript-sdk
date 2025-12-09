/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { CustomerChange, customerChangeSchema } from './customerChange.js';

export interface CustomerChangesPreviewResponse {
  changes: CustomerChange;
  [key: string]: unknown;
}

export const customerChangesPreviewResponseSchema: Schema<CustomerChangesPreviewResponse> = lazy(
  () => expandoObject({ changes: ['changes', customerChangeSchema] })
);
