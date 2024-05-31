/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DebitNoteRole
 */
export enum DebitNoteRole {
  Chargeback = 'chargeback',
  Refund = 'refund',
}

/**
 * Schema for DebitNoteRole
 */
export const  debitNoteRoleSchema: Schema<DebitNoteRole> = stringEnum(DebitNoteRole);
