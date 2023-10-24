/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  BankAccountVerification,
  bankAccountVerificationSchema,
} from './bankAccountVerification';

export interface BankAccountVerificationRequest {
  bankAccountVerification: BankAccountVerification;
}

export const bankAccountVerificationRequestSchema: Schema<BankAccountVerificationRequest> = object(
  {
    bankAccountVerification: [
      'bank_account_verification',
      lazy(() => bankAccountVerificationSchema),
    ],
  }
);
