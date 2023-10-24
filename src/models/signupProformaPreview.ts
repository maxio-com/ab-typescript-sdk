/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ProformaInvoice, proformaInvoiceSchema } from './proformaInvoice';

export interface SignupProformaPreview {
  currentProformaInvoice?: ProformaInvoice;
  nextProformaInvoice?: ProformaInvoice;
}

export const signupProformaPreviewSchema: Schema<SignupProformaPreview> = object(
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
