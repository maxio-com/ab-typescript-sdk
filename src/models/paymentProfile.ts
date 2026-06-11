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
} from '../schema.js';

export interface PaymentProfile {
  id: number;
  vaultToken?: string;
  gatewayHandle?: string | null;
  customerVaultToken?: string | null;
  [key: string]: unknown;
}

export const paymentProfileSchema: Schema<PaymentProfile> = expandoObject({
  id: ['id', number()],
  vaultToken: ['vault_token', optional(string())],
  gatewayHandle: ['gateway_handle', optional(nullable(string()))],
  customerVaultToken: ['customer_vault_token', optional(nullable(string()))],
});
