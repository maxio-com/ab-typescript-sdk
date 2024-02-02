/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  InvoiceCustomField,
  invoiceCustomFieldSchema,
} from './invoiceCustomField';

export interface CustomerCustomFieldsChange {
  before: InvoiceCustomField[];
  after: InvoiceCustomField[];
}

export const customerCustomFieldsChangeSchema: Schema<CustomerCustomFieldsChange> = object(
  {
    before: ['before', array(lazy(() => invoiceCustomFieldSchema))],
    after: ['after', array(lazy(() => invoiceCustomFieldSchema))],
  }
);
