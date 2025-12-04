/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  InvoicePayerChange,
  invoicePayerChangeSchema,
} from './invoicePayerChange.js';

export interface CustomerPayerChange {
  before: InvoicePayerChange;
  after: InvoicePayerChange;
  [key: string]: unknown;
}

export const customerPayerChangeSchema: Schema<CustomerPayerChange> = lazy(() =>
  expandoObject({
    before: ['before', invoicePayerChangeSchema],
    after: ['after', invoicePayerChangeSchema],
  })
);
