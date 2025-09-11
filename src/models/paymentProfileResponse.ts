/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema.js';
import {
  PaymentProfile,
  paymentProfileSchema,
} from './containers/paymentProfile.js';

export interface PaymentProfileResponse {
  paymentProfile: PaymentProfile;
  [key: string]: unknown;
}

export const paymentProfileResponseSchema: Schema<PaymentProfileResponse> = expandoObject(
  { paymentProfile: ['payment_profile', paymentProfileSchema] }
);
