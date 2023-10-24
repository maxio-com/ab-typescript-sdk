/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceConsolidationLevel
 */
export enum InvoiceConsolidationLevel {
  None = 'none',
  Child = 'child',
  Parent = 'parent',
}

/**
 * Schema for InvoiceConsolidationLevel
 */
export const invoiceConsolidationLevelSchema: Schema<InvoiceConsolidationLevel> = stringEnum(InvoiceConsolidationLevel);
