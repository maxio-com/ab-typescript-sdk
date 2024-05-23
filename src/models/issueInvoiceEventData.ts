/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  InvoiceConsolidationLevel,
  invoiceConsolidationLevelSchema,
} from './invoiceConsolidationLevel';
import { InvoiceStatus, invoiceStatusSchema } from './invoiceStatus';

/** Example schema for an `issue_invoice` event */
export interface IssueInvoiceEventData {
  /**
   * Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:
   * * "none": A normal invoice with no consolidation.
   * * "child": An invoice segment which has been combined into a consolidated invoice.
   * * "parent": A consolidated invoice, whose contents are composed of invoice segments.
   * "Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.
   * See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835).
   */
  consolidationLevel: InvoiceConsolidationLevel;
  /** The status of the invoice before event occurrence. See [Invoice Statuses](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405078794253-Introduction-to-Invoices#invoice-statusess) for more. */
  fromStatus: InvoiceStatus;
  /** The status of the invoice after event occurrence. See [Invoice Statuses](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405078794253-Introduction-to-Invoices#invoice-statusess) for more. */
  toStatus: InvoiceStatus;
  /** Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. */
  dueAmount: string;
  /** The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' */
  totalAmount: string;
  [key: string]: unknown;
}

export const issueInvoiceEventDataSchema: Schema<IssueInvoiceEventData> = expandoObject(
  {
    consolidationLevel: [
      'consolidation_level',
      invoiceConsolidationLevelSchema,
    ],
    fromStatus: ['from_status', invoiceStatusSchema],
    toStatus: ['to_status', invoiceStatusSchema],
    dueAmount: ['due_amount', string()],
    totalAmount: ['total_amount', string()],
  }
);
