/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { BankAccount, bankAccountSchema } from './bankAccount';

export interface BankAccountResponse {
  paymentProfile: BankAccount;
}

export const bankAccountResponseSchema: Schema<BankAccountResponse> = object({
  paymentProfile: ['payment_profile', lazy(() => bankAccountSchema)],
});
