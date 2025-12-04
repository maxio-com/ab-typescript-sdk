/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { ReferralCode, referralCodeSchema } from './referralCode.js';

export interface ReferralValidationResponse {
  referralCode?: ReferralCode;
  [key: string]: unknown;
}

export const referralValidationResponseSchema: Schema<ReferralValidationResponse> = lazy(
  () =>
    expandoObject({
      referralCode: ['referral_code', optional(referralCodeSchema)],
    })
);
