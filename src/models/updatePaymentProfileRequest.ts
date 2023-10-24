/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpdatePaymentProfile,
  updatePaymentProfileSchema,
} from './updatePaymentProfile';

export interface UpdatePaymentProfileRequest {
  paymentProfile: UpdatePaymentProfile;
}

export const updatePaymentProfileRequestSchema: Schema<UpdatePaymentProfileRequest> = object(
  {
    paymentProfile: ['payment_profile', lazy(() => updatePaymentProfileSchema)],
  }
);
