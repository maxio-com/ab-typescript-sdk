/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreatePaymentProfile,
  createPaymentProfileSchema,
} from './createPaymentProfile';

export interface CreatePaymentProfileRequest {
  paymentProfile: CreatePaymentProfile;
  [key: string]: unknown;
}

export const createPaymentProfileRequestSchema: Schema<CreatePaymentProfileRequest> = expandoObject(
  {
    paymentProfile: ['payment_profile', lazy(() => createPaymentProfileSchema)],
  }
);
