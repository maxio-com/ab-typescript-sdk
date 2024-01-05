/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LineItemTransactionType
 */
export enum LineItemTransactionType {
  Charge = 'charge',
  Credit = 'credit',
  Adjustment = 'adjustment',
  Payment = 'payment',
  Refund = 'refund',
  InfoTransaction = 'info_transaction',
  PaymentAuthorization = 'payment_authorization',
}

/**
 * Schema for LineItemTransactionType
 */
export const lineItemTransactionTypeSchema: Schema<LineItemTransactionType> = stringEnum(LineItemTransactionType);
