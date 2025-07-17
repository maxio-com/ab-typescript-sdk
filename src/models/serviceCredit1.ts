/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ServiceCreditType,
  serviceCreditTypeSchema,
} from './serviceCreditType';

export interface ServiceCredit1 {
  id?: number;
  /** The amount in cents of the entry */
  amountInCents?: bigint;
  /** The new balance for the credit account */
  endingBalanceInCents?: bigint;
  /** The type of entry */
  entryType?: ServiceCreditType;
  /** The memo attached to the entry */
  memo?: string;
  /** The invoice uid associated with the entry. Only present for debit entries */
  invoiceUid?: string | null;
  /** The remaining balance for the entry */
  remainingBalanceInCents?: bigint;
  /** The date and time the entry was created */
  createdAt?: string;
  [key: string]: unknown;
}

export const serviceCredit1Schema: Schema<ServiceCredit1> = expandoObject({
  id: ['id', optional(number())],
  amountInCents: ['amount_in_cents', optional(bigint())],
  endingBalanceInCents: ['ending_balance_in_cents', optional(bigint())],
  entryType: ['entry_type', optional(serviceCreditTypeSchema)],
  memo: ['memo', optional(string())],
  invoiceUid: ['invoice_uid', optional(nullable(string()))],
  remainingBalanceInCents: ['remaining_balance_in_cents', optional(bigint())],
  createdAt: ['created_at', optional(string())],
});
