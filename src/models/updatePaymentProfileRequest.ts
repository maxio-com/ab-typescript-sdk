/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  UpdatePaymentProfile,
  updatePaymentProfileSchema,
} from './updatePaymentProfile';

export interface UpdatePaymentProfileRequest {
  paymentProfile: UpdatePaymentProfile;
  [key: string]: unknown;
}

export const updatePaymentProfileRequestSchema: Schema<UpdatePaymentProfileRequest> = expandoObject(
  {
    paymentProfile: ['payment_profile', lazy(() => updatePaymentProfileSchema)],
  }
);
