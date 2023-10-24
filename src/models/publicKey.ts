/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface PublicKey {
  publicKey?: string;
  requiresSecurityToken?: boolean;
  createdAt?: string;
}

export const publicKeySchema: Schema<PublicKey> = object({
  publicKey: ['public_key', optional(string())],
  requiresSecurityToken: ['requires_security_token', optional(boolean())],
  createdAt: ['created_at', optional(string())],
});
