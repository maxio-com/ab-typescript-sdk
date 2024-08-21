/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CustomerChange, customerChangeSchema } from './customerChange';

export interface CustomerChangesPreviewResponse {
  changes: CustomerChange;
  [key: string]: unknown;
}

export const customerChangesPreviewResponseSchema: Schema<CustomerChangesPreviewResponse> = expandoObject(
  { changes: ['changes', lazy(() => customerChangeSchema)] }
);
