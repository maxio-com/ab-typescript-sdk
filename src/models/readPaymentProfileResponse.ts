/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema } from '../schema';
import {
  ReadPaymentProfileResponsePaymentProfile,
  readPaymentProfileResponsePaymentProfileSchema,
} from './containers/readPaymentProfileResponsePaymentProfile';

export interface ReadPaymentProfileResponse {
  paymentProfile: ReadPaymentProfileResponsePaymentProfile;
}

export const readPaymentProfileResponseSchema: Schema<ReadPaymentProfileResponse> = object(
  {
    paymentProfile: [
      'payment_profile',
      readPaymentProfileResponsePaymentProfileSchema,
    ],
  }
);
