/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, optional, Schema } from '../schema';

export interface BankAccountVerification {
  deposit1InCents?: bigint;
  deposit2InCents?: bigint;
  [key: string]: unknown;
}

export const bankAccountVerificationSchema: Schema<BankAccountVerification> = expandoObject(
  {
    deposit1InCents: ['deposit_1_in_cents', optional(bigint())],
    deposit2InCents: ['deposit_2_in_cents', optional(bigint())],
  }
);
