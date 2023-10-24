/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreatePaymentProfile,
  createPaymentProfileSchema,
} from './createPaymentProfile';

export interface CreatePaymentProfileRequest {
  paymentProfile: CreatePaymentProfile;
}

export const createPaymentProfileRequestSchema: Schema<CreatePaymentProfileRequest> = object(
  {
    paymentProfile: ['payment_profile', lazy(() => createPaymentProfileSchema)],
  }
);
