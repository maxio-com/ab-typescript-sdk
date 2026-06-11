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
import {
  TokenizedPaymentProfile,
  tokenizedPaymentProfileSchema,
} from './tokenizedPaymentProfile.js';

export interface ChjsTokenizationSuccess {
  paymentProfile: TokenizedPaymentProfile;
  gatewayCustomerId?: number | null;
  [key: string]: unknown;
}

export const chjsTokenizationSuccessSchema: Schema<ChjsTokenizationSuccess> = lazy(
  () =>
    expandoObject({
      paymentProfile: ['payment_profile', tokenizedPaymentProfileSchema],
      gatewayCustomerId: ['gateway_customer_id', optional(nullable(number()))],
    })
);
