/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ServiceCreditType,
  serviceCreditTypeSchema,
} from './serviceCreditType';

export interface ServiceCredit {
  id?: number;
  /** The amount in cents of the entry */
  amountInCents?: bigint;
  /** The new balance for the credit account */
  endingBalanceInCents?: bigint;
  /** The type of entry */
  entryType?: ServiceCreditType;
  /** The memo attached to the entry */
  memo?: string;
  [key: string]: unknown;
}

export const serviceCreditSchema: Schema<ServiceCredit> = expandoObject({
  id: ['id', optional(number())],
  amountInCents: ['amount_in_cents', optional(bigint())],
  endingBalanceInCents: ['ending_balance_in_cents', optional(bigint())],
  entryType: ['entry_type', optional(serviceCreditTypeSchema)],
  memo: ['memo', optional(string())],
});
