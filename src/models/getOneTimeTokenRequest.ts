/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  GetOneTimeTokenPaymentProfile,
  getOneTimeTokenPaymentProfileSchema,
} from './getOneTimeTokenPaymentProfile.js';

export interface GetOneTimeTokenRequest {
  paymentProfile: GetOneTimeTokenPaymentProfile;
  [key: string]: unknown;
}

export const getOneTimeTokenRequestSchema: Schema<GetOneTimeTokenRequest> = lazy(
  () =>
    expandoObject({
      paymentProfile: ['payment_profile', getOneTimeTokenPaymentProfileSchema],
    })
);
