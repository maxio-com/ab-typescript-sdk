/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface BankAccountVerification {
  deposit1InCents?: number;
  deposit2InCents?: number;
}

export const bankAccountVerificationSchema: Schema<BankAccountVerification> = object(
  {
    deposit1InCents: ['deposit_1_in_cents', optional(number())],
    deposit2InCents: ['deposit_2_in_cents', optional(number())],
  }
);
