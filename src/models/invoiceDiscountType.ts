/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceDiscountType
 */
export enum InvoiceDiscountType {
  Percentage = 'percentage',
  FlatAmount = 'flat_amount',
  Rollover = 'rollover',
}

/**
 * Schema for InvoiceDiscountType
 */
export const invoiceDiscountTypeSchema: Schema<InvoiceDiscountType> = stringEnum(
  InvoiceDiscountType
);
