/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { Invoice, invoiceSchema } from './invoice';

export interface ConsolidatedInvoice {
  invoices?: Invoice[];
  [key: string]: unknown;
}

export const consolidatedInvoiceSchema: Schema<ConsolidatedInvoice> = expandoObject(
  { invoices: ['invoices', optional(array(lazy(() => invoiceSchema)))] }
);
