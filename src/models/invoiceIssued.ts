/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema';
import {
  InvoiceLineItemEventData,
  invoiceLineItemEventDataSchema,
} from './invoiceLineItemEventData';

export interface InvoiceIssued {
  uid: string;
  number: string;
  role: string;
  dueDate: string;
  issueDate: string;
  paidDate: string;
  dueAmount: string;
  paidAmount: string;
  taxAmount: string;
  refundAmount: string;
  totalAmount: string;
  statusAmount: string;
  productName: string;
  consolidationLevel: string;
  lineItems: InvoiceLineItemEventData[];
  [key: string]: unknown;
}

export const invoiceIssuedSchema: Schema<InvoiceIssued> = expandoObject({
  uid: ['uid', string()],
  number: ['number', string()],
  role: ['role', string()],
  dueDate: ['due_date', string()],
  issueDate: ['issue_date', string()],
  paidDate: ['paid_date', string()],
  dueAmount: ['due_amount', string()],
  paidAmount: ['paid_amount', string()],
  taxAmount: ['tax_amount', string()],
  refundAmount: ['refund_amount', string()],
  totalAmount: ['total_amount', string()],
  statusAmount: ['status_amount', string()],
  productName: ['product_name', string()],
  consolidationLevel: ['consolidation_level', string()],
  lineItems: ['line_items', array(lazy(() => invoiceLineItemEventDataSchema))],
});
