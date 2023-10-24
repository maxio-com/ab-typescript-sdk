/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** (Optional) If passed, the proof of the authorized ACH agreement terms will be persisted. */
export interface ACHAgreement {
  /** (Required when providing ACH agreement params) The ACH authorization agreement terms. */
  agreementTerms?: string;
  /** (Required when providing ACH agreement params) The first name of the person authorizing the ACH agreement. */
  authorizerFirstName?: string;
  /** (Required when providing ACH agreement params) The last name of the person authorizing the ACH agreement. */
  authorizerLastName?: string;
  /** (Required when providing ACH agreement params) The IP address of the person authorizing the ACH agreement. */
  ipAddress?: string;
}

export const aCHAgreementSchema: Schema<ACHAgreement> = object({
  agreementTerms: ['agreement_terms', optional(string())],
  authorizerFirstName: ['authorizer_first_name', optional(string())],
  authorizerLastName: ['authorizer_last_name', optional(string())],
  ipAddress: ['ip_address', optional(string())],
});
