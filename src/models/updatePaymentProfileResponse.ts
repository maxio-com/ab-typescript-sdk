/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpdatedPaymentProfile,
  updatedPaymentProfileSchema,
} from './updatedPaymentProfile';

export interface UpdatePaymentProfileResponse {
  paymentProfile: UpdatedPaymentProfile;
}

export const updatePaymentProfileResponseSchema: Schema<UpdatePaymentProfileResponse> = object(
  {
    paymentProfile: [
      'payment_profile',
      lazy(() => updatedPaymentProfileSchema),
    ],
  }
);
