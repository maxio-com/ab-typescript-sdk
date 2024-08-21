/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  BankAccountVerification,
  bankAccountVerificationSchema,
} from './bankAccountVerification';

export interface BankAccountVerificationRequest {
  bankAccountVerification: BankAccountVerification;
  [key: string]: unknown;
}

export const bankAccountVerificationRequestSchema: Schema<BankAccountVerificationRequest> = expandoObject(
  {
    bankAccountVerification: [
      'bank_account_verification',
      lazy(() => bankAccountVerificationSchema),
    ],
  }
);
