/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CreditNoteStatus
 */
export enum CreditNoteStatus {
  Open = 'open',
  Applied = 'applied',
}

/**
 * Schema for CreditNoteStatus
 */
export const  creditNoteStatusSchema: Schema<CreditNoteStatus> = stringEnum(CreditNoteStatus);
