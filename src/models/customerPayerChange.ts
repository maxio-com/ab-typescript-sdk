/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  InvoicePayerChange,
  invoicePayerChangeSchema,
} from './invoicePayerChange';

export interface CustomerPayerChange {
  before: InvoicePayerChange;
  after: InvoicePayerChange;
}

export const customerPayerChangeSchema: Schema<CustomerPayerChange> = object({
  before: ['before', lazy(() => invoicePayerChangeSchema)],
  after: ['after', lazy(() => invoicePayerChangeSchema)],
});
