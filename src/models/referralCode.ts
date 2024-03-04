/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ReferralCode {
  id?: number;
  siteId?: number;
  subscriptionId?: number;
  code?: string;
  [key: string]: unknown;
}

export const referralCodeSchema: Schema<ReferralCode> = expandoObject({
  id: ['id', optional(number())],
  siteId: ['site_id', optional(number())],
  subscriptionId: ['subscription_id', optional(number())],
  code: ['code', optional(string())],
});
