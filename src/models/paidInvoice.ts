/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import { InvoiceStatus, invoiceStatusSchema } from './invoiceStatus';

export interface PaidInvoice {
  /** The uid of the paid invoice */
  invoiceId?: string;
  /** The current status of the invoice. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. */
  status?: InvoiceStatus;
  /** The remaining due amount on the invoice */
  dueAmount?: string;
  /** The total amount paid on this invoice (including any prior payments) */
  paidAmount?: string;
  [key: string]: unknown;
}

export const paidInvoiceSchema: Schema<PaidInvoice> = expandoObject({
  invoiceId: ['invoice_id', optional(string())],
  status: ['status', optional(invoiceStatusSchema)],
  dueAmount: ['due_amount', optional(string())],
  paidAmount: ['paid_amount', optional(string())],
});
