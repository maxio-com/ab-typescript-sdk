/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface OfferSignupPage {
  id?: number;
  nickname?: string;
  enabled?: boolean;
  returnUrl?: string;
  returnParams?: string;
  url?: string;
  [key: string]: unknown;
}

export const offerSignupPageSchema: Schema<OfferSignupPage> = expandoObject({
  id: ['id', optional(number())],
  nickname: ['nickname', optional(string())],
  enabled: ['enabled', optional(boolean())],
  returnUrl: ['return_url', optional(string())],
  returnParams: ['return_params', optional(string())],
  url: ['url', optional(string())],
});
