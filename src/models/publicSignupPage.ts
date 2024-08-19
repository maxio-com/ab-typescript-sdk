/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface PublicSignupPage {
  /** The id of the signup page (public_signup_pages only) */
  id?: number;
  /** The url to which a customer will be returned after a successful signup (public_signup_pages only) */
  returnUrl?: string | null;
  /** The params to be appended to the return_url (public_signup_pages only) */
  returnParams?: string | null;
  /** The url where the signup page can be viewed (public_signup_pages only) */
  url?: string;
  [key: string]: unknown;
}

export const publicSignupPageSchema: Schema<PublicSignupPage> = expandoObject({
  id: ['id', optional(number())],
  returnUrl: ['return_url', optional(nullable(string()))],
  returnParams: ['return_params', optional(nullable(string()))],
  url: ['url', optional(string())],
});
