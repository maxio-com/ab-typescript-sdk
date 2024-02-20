/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  InvoicePrePayment,
  invoicePrePaymentSchema,
} from '../invoicePrePayment';

/** This is a container type for one-of types. */
export type RecordPaymentResponsePrepayment = InvoicePrePayment;

export const recordPaymentResponsePrepaymentSchema: Schema<RecordPaymentResponsePrepayment> = oneOf(
  [invoicePrePaymentSchema]
);

export namespace RecordPaymentResponsePrepayment {
  /**
  * Validation method to narrow down union type to InvoicePrePayment type case.
  *
  * This is Invoice PrePayment case.
  */
  export function isInvoicePrePayment(value: unknown): value is InvoicePrePayment {
    const validationResult = validateAndMap(value, invoicePrePaymentSchema);
    return validationResult.errors === false;
  }
}
