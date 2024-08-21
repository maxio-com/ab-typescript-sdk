/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  BankAccountPaymentProfile,
  bankAccountPaymentProfileSchema,
} from './bankAccountPaymentProfile';

export interface BankAccountResponse {
  paymentProfile: BankAccountPaymentProfile;
  [key: string]: unknown;
}

export const bankAccountResponseSchema: Schema<BankAccountResponse> = expandoObject(
  {
    paymentProfile: [
      'payment_profile',
      lazy(() => bankAccountPaymentProfileSchema),
    ],
  }
);
