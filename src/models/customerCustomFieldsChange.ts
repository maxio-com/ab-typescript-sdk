/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  InvoiceCustomField,
  invoiceCustomFieldSchema,
} from './invoiceCustomField.js';

export interface CustomerCustomFieldsChange {
  before: InvoiceCustomField[];
  after: InvoiceCustomField[];
  [key: string]: unknown;
}

export const customerCustomFieldsChangeSchema: Schema<CustomerCustomFieldsChange> = lazy(
  () =>
    expandoObject({
      before: ['before', array(invoiceCustomFieldSchema)],
      after: ['after', array(invoiceCustomFieldSchema)],
    })
);
