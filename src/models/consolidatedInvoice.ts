/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

export interface ConsolidatedInvoice {
  invoices?: Invoice[];
}

export const consolidatedInvoiceSchema: Schema<ConsolidatedInvoice> = object({
  invoices: ['invoices', optional(array(lazy(() => invoiceSchema)))],
});
