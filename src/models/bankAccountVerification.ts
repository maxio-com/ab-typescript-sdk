/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, optional, Schema } from '../schema';

export interface BankAccountVerification {
  deposit1InCents?: bigint;
  deposit2InCents?: bigint;
}

export const bankAccountVerificationSchema: Schema<BankAccountVerification> = object(
  {
    deposit1InCents: ['deposit_1_in_cents', optional(bigint())],
    deposit2InCents: ['deposit_2_in_cents', optional(bigint())],
  }
);
