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

export interface ProformaInvoiceIssued {
  uid: string;
  number: string;
  role: string;
  deliveryDate: string;
  createdAt: string;
  dueAmount: string;
  paidAmount: string;
  taxAmount: string;
  totalAmount: string;
  productName: string;
  lineItems: InvoiceLineItemEventData[];
  [key: string]: unknown;
}

export const proformaInvoiceIssuedSchema: Schema<ProformaInvoiceIssued> = expandoObject(
  {
    uid: ['uid', string()],
    number: ['number', string()],
    role: ['role', string()],
    deliveryDate: ['delivery_date', string()],
    createdAt: ['created_at', string()],
    dueAmount: ['due_amount', string()],
    paidAmount: ['paid_amount', string()],
    taxAmount: ['tax_amount', string()],
    totalAmount: ['total_amount', string()],
    productName: ['product_name', string()],
    lineItems: [
      'line_items',
      array(lazy(() => invoiceLineItemEventDataSchema)),
    ],
  }
);
