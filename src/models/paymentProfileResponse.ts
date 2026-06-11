/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  PaymentProfile2,
  paymentProfile2Schema,
} from './containers/paymentProfile2.js';

export interface PaymentProfileResponse {
  paymentProfile: PaymentProfile2;
  [key: string]: unknown;
}

export const paymentProfileResponseSchema: Schema<PaymentProfileResponse> = lazy(
  () =>
    expandoObject({
      paymentProfile: ['payment_profile', paymentProfile2Schema],
    })
);
