/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema, string } from '../schema';

export interface PublicKey {
  publicKey?: string;
  requiresSecurityToken?: boolean;
  createdAt?: string;
  [key: string]: unknown;
}

export const publicKeySchema: Schema<PublicKey> = expandoObject({
  publicKey: ['public_key', optional(string())],
  requiresSecurityToken: ['requires_security_token', optional(boolean())],
  createdAt: ['created_at', optional(string())],
});
