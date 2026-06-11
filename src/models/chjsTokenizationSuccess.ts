/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
} from '../schema.js';
import { PaymentProfile, paymentProfileSchema } from './paymentProfile.js';

export interface ChjsTokenizationSuccess {
  paymentProfile: PaymentProfile;
  gatewayCustomerId?: number | null;
  [key: string]: unknown;
}

export const chjsTokenizationSuccessSchema: Schema<ChjsTokenizationSuccess> = lazy(
  () =>
    expandoObject({
      paymentProfile: ['payment_profile', paymentProfileSchema],
      gatewayCustomerId: ['gateway_customer_id', optional(nullable(number()))],
    })
);
