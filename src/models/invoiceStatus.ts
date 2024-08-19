/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceStatus
 */
export enum InvoiceStatus {
  Draft = 'draft',
  Open = 'open',
  Paid = 'paid',
  Pending = 'pending',
  Voided = 'voided',
  Canceled = 'canceled',
}

/**
 * Schema for InvoiceStatus
 */
export const invoiceStatusSchema: Schema<InvoiceStatus> = stringEnum(
  InvoiceStatus
);
