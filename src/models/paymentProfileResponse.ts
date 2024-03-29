/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema';
import {
  PaymentProfileResponsePaymentProfile,
  paymentProfileResponsePaymentProfileSchema,
} from './containers/paymentProfileResponsePaymentProfile';

export interface PaymentProfileResponse {
  paymentProfile: PaymentProfileResponsePaymentProfile;
  [key: string]: unknown;
}

export const paymentProfileResponseSchema: Schema<PaymentProfileResponse> = expandoObject(
  {
    paymentProfile: [
      'payment_profile',
      paymentProfileResponsePaymentProfileSchema,
    ],
  }
);
