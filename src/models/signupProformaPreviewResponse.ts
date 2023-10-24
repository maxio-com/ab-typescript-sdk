/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SignupProformaPreview,
  signupProformaPreviewSchema,
} from './signupProformaPreview';

export interface SignupProformaPreviewResponse {
  proformaInvoicePreview: SignupProformaPreview;
}

export const signupProformaPreviewResponseSchema: Schema<SignupProformaPreviewResponse> = object(
  {
    proformaInvoicePreview: [
      'proforma_invoice_preview',
      lazy(() => signupProformaPreviewSchema),
    ],
  }
);
