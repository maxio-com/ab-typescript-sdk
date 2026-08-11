/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { UpdateInvoice, updateInvoiceSchema } from './updateInvoice.js';

/** Request payload for updating a draft ad hoc invoice. */
export interface UpdateInvoiceRequest {
  /** Attributes of a draft ad hoc invoice which can be updated. Only the submitted attributes are changed. */
  invoice: UpdateInvoice;
  [key: string]: unknown;
}

export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = lazy(
  () => expandoObject({ invoice: ['invoice', updateInvoiceSchema] })
);
