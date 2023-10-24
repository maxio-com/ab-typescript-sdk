/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreatedPaymentProfile,
  createdPaymentProfileSchema,
} from './createdPaymentProfile';

export interface CreatePaymentProfileResponse {
  paymentProfile: CreatedPaymentProfile;
}

export const createPaymentProfileResponseSchema: Schema<CreatePaymentProfileResponse> = object(
  {
    paymentProfile: [
      'payment_profile',
      lazy(() => createdPaymentProfileSchema),
    ],
  }
);
