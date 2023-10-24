/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoicePaymentType
 */
export enum InvoicePaymentType {
  External = 'external',
  Prepayment = 'prepayment',
  ServiceCredit = 'service_credit',
  Payment = 'payment',
}

/**
 * Schema for InvoicePaymentType
 */
export const invoicePaymentTypeSchema: Schema<InvoicePaymentType> = stringEnum(InvoicePaymentType);
