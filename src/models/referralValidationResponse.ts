/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ReferralCode, referralCodeSchema } from './referralCode';

export interface ReferralValidationResponse {
  referralCode?: ReferralCode;
}

export const referralValidationResponseSchema: Schema<ReferralValidationResponse> = object(
  { referralCode: ['referral_code', optional(lazy(() => referralCodeSchema))] }
);
