/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Required when creating a subscription with Maxio Payments. */
export interface AgreementAcceptance {
  /** Required when providing agreement acceptance params. */
  ipAddress?: string;
  /** Required when creating a subscription with Maxio Payments. Either terms_url or provacy_policy_url required when providing agreement_acceptance params. */
  termsUrl?: string;
  privacyPolicyUrl?: string;
  returnRefundPolicyUrl?: string;
  deliveryPolicyUrl?: string;
  secureCheckoutPolicyUrl?: string;
}

export const agreementAcceptanceSchema: Schema<AgreementAcceptance> = object({
  ipAddress: ['ip_address', optional(string())],
  termsUrl: ['terms_url', optional(string())],
  privacyPolicyUrl: ['privacy_policy_url', optional(string())],
  returnRefundPolicyUrl: ['return_refund_policy_url', optional(string())],
  deliveryPolicyUrl: ['delivery_policy_url', optional(string())],
  secureCheckoutPolicyUrl: ['secure_checkout_policy_url', optional(string())],
});
