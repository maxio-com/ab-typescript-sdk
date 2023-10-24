/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StatusCreateInvoice
 */
export enum StatusCreateInvoice {
  Draft = 'draft',
  Open = 'open',
}

/**
 * Schema for StatusCreateInvoice
 */
export const statusCreateInvoiceSchema: Schema<StatusCreateInvoice> = stringEnum(StatusCreateInvoice);
