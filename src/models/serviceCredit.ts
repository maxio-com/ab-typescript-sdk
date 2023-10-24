/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { ServiceCreditType, serviceCreditTypeSchema } from './serviceCreditType';

export interface ServiceCredit {
  id?: number;
  /** The amount in cents of the entry */
  amountInCents?: number;
  /** The new balance for the credit account */
  endingBalanceInCents?: number;
  /** The type of entry */
  entryType?: ServiceCreditType;
  /** The memo attached to the entry */
  memo?: string;
}

export const serviceCreditSchema: Schema<ServiceCredit> = object({
  id: ['id', optional(number())],
  amountInCents: ['amount_in_cents', optional(number())],
  endingBalanceInCents: ['ending_balance_in_cents', optional(number())],
  entryType: ['entry_type', optional(serviceCreditTypeSchema)],
  memo: ['memo', optional(string())],
});
