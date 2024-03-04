/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  InvoiceCustomField,
  invoiceCustomFieldSchema,
} from './invoiceCustomField';

export interface CustomerCustomFieldsChange {
  before: InvoiceCustomField[];
  after: InvoiceCustomField[];
  [key: string]: unknown;
}

export const customerCustomFieldsChangeSchema: Schema<CustomerCustomFieldsChange> = expandoObject(
  {
    before: ['before', array(lazy(() => invoiceCustomFieldSchema))],
    after: ['after', array(lazy(() => invoiceCustomFieldSchema))],
  }
);
