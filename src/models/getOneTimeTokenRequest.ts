/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  GetOneTimeTokenPaymentProfile,
  getOneTimeTokenPaymentProfileSchema,
} from './getOneTimeTokenPaymentProfile';

export interface GetOneTimeTokenRequest {
  paymentProfile: GetOneTimeTokenPaymentProfile;
  [key: string]: unknown;
}

export const getOneTimeTokenRequestSchema: Schema<GetOneTimeTokenRequest> = expandoObject(
  {
    paymentProfile: [
      'payment_profile',
      lazy(() => getOneTimeTokenPaymentProfileSchema),
    ],
  }
);
