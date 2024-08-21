/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SignupProformaPreview,
  signupProformaPreviewSchema,
} from './signupProformaPreview';

export interface SignupProformaPreviewResponse {
  proformaInvoicePreview: SignupProformaPreview;
  [key: string]: unknown;
}

export const signupProformaPreviewResponseSchema: Schema<SignupProformaPreviewResponse> = expandoObject(
  {
    proformaInvoicePreview: [
      'proforma_invoice_preview',
      lazy(() => signupProformaPreviewSchema),
    ],
  }
);
