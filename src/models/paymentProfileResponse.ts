/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { PaymentProfile, paymentProfileSchema } from './paymentProfile';

export interface PaymentProfileResponse {
  paymentProfile: PaymentProfile;
}

export const paymentProfileResponseSchema: Schema<PaymentProfileResponse> = object(
  { paymentProfile: ['payment_profile', lazy(() => paymentProfileSchema)] }
);
