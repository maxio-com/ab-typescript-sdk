/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { ReferralCode, referralCodeSchema } from './referralCode';

export interface ReferralValidationResponse {
  referralCode?: ReferralCode;
  [key: string]: unknown;
}

export const referralValidationResponseSchema: Schema<ReferralValidationResponse> = expandoObject(
  { referralCode: ['referral_code', optional(lazy(() => referralCodeSchema))] }
);
