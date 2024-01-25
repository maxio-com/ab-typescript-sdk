/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';
import {
  PaymentProfileResponsePaymentProfile,
  paymentProfileResponsePaymentProfileSchema,
} from './containers/paymentProfileResponsePaymentProfile';

export interface PaymentProfileResponse {
  paymentProfile: PaymentProfileResponsePaymentProfile;
}

export const paymentProfileResponseSchema: Schema<PaymentProfileResponse> = object(
  {
    paymentProfile: [
      'payment_profile',
      paymentProfileResponsePaymentProfileSchema,
    ],
  }
);
