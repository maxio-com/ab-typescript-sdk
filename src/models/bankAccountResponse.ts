/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  BankAccountPaymentProfile,
  bankAccountPaymentProfileSchema,
} from './bankAccountPaymentProfile';

export interface BankAccountResponse {
  paymentProfile: BankAccountPaymentProfile;
}

export const bankAccountResponseSchema: Schema<BankAccountResponse> = object({
  paymentProfile: [
    'payment_profile',
    lazy(() => bankAccountPaymentProfileSchema),
  ],
});
