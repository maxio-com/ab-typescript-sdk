/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DebitNoteStatus
 */
export enum DebitNoteStatus {
  Open = 'open',
  Applied = 'applied',
  Banished = 'banished',
  Paid = 'paid',
}

/**
 * Schema for DebitNoteStatus
 */
export const debitNoteStatusSchema: Schema<DebitNoteStatus> = stringEnum(
  DebitNoteStatus
);
