/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema } from '../schema';

export interface NetTerms {
  defaultNetTerms?: number;
  automaticNetTerms?: number;
  remittanceNetTerms?: number;
  netTermsOnRemittanceSignupsEnabled?: boolean;
  customNetTermsEnabled?: boolean;
}

export const netTermsSchema: Schema<NetTerms> = object({
  defaultNetTerms: ['default_net_terms', optional(number())],
  automaticNetTerms: ['automatic_net_terms', optional(number())],
  remittanceNetTerms: ['remittance_net_terms', optional(number())],
  netTermsOnRemittanceSignupsEnabled: [
    'net_terms_on_remittance_signups_enabled',
    optional(boolean()),
  ],
  customNetTermsEnabled: ['custom_net_terms_enabled', optional(boolean())],
});
