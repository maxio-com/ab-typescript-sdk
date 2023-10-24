/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  GetOneTimeTokenPaymentProfile,
  getOneTimeTokenPaymentProfileSchema,
} from './getOneTimeTokenPaymentProfile';

export interface GetOneTimeTokenRequest {
  paymentProfile: GetOneTimeTokenPaymentProfile;
}

export const getOneTimeTokenRequestSchema: Schema<GetOneTimeTokenRequest> = object(
  {
    paymentProfile: [
      'payment_profile',
      lazy(() => getOneTimeTokenPaymentProfileSchema),
    ],
  }
);
