/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { ProformaInvoice, proformaInvoiceSchema } from './proformaInvoice';

export interface SignupProformaPreview {
  currentProformaInvoice?: ProformaInvoice;
  nextProformaInvoice?: ProformaInvoice;
  [key: string]: unknown;
}

export const signupProformaPreviewSchema: Schema<SignupProformaPreview> = expandoObject(
  {
    currentProformaInvoice: [
      'current_proforma_invoice',
      optional(lazy(() => proformaInvoiceSchema)),
    ],
    nextProformaInvoice: [
      'next_proforma_invoice',
      optional(lazy(() => proformaInvoiceSchema)),
    ],
  }
);
