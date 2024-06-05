/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  InvoiceConsolidationLevel,
  invoiceConsolidationLevelSchema,
} from './invoiceConsolidationLevel';
import { InvoiceStatus, invoiceStatusSchema } from './invoiceStatus';

/** Example schema for an `change_invoice_status` event */
export interface ChangeInvoiceStatusEventData {
  /** Identifier for the transaction within the payment gateway. */
  gatewayTransId?: string;
  /** The monetary value associated with the linked payment, expressed in dollars. */
  amount?: string;
  /** The status of the invoice before any changes occurred. See [Invoice Statuses](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405078794253-Introduction-to-Invoices#invoice-statuses) for more. */
  fromStatus: InvoiceStatus;
  /** The updated status of the invoice after changes have been made. See [Invoice Statuses](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405078794253-Introduction-to-Invoices#invoice-statuses) for more. */
  toStatus: InvoiceStatus;
  consolidationLevel?: InvoiceConsolidationLevel;
  [key: string]: unknown;
}

export const changeInvoiceStatusEventDataSchema: Schema<ChangeInvoiceStatusEventData> = expandoObject(
  {
    gatewayTransId: ['gateway_trans_id', optional(string())],
    amount: ['amount', optional(string())],
    fromStatus: ['from_status', invoiceStatusSchema],
    toStatus: ['to_status', invoiceStatusSchema],
    consolidationLevel: [
      'consolidation_level',
      optional(invoiceConsolidationLevelSchema),
    ],
  }
);
