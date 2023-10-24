/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CustomerChange, customerChangeSchema } from './customerChange';

export interface CustomerChangesPreviewResponse {
  changes: CustomerChange;
}

export const customerChangesPreviewResponseSchema: Schema<CustomerChangesPreviewResponse> = object(
  { changes: ['changes', lazy(() => customerChangeSchema)] }
);
