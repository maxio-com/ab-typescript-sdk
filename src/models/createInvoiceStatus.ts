/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreateInvoiceStatus
 */
export enum CreateInvoiceStatus {
  Draft = 'draft',
  Open = 'open',
}

/**
 * Schema for CreateInvoiceStatus
 */
export const  createInvoiceStatusSchema: Schema<CreateInvoiceStatus> = stringEnum(CreateInvoiceStatus);
