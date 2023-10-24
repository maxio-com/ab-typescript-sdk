/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface RevokedInvitation {
  lastSentAt?: string;
  lastAcceptedAt?: string;
  uninvitedCount?: number;
}

export const revokedInvitationSchema: Schema<RevokedInvitation> = object({
  lastSentAt: ['last_sent_at', optional(string())],
  lastAcceptedAt: ['last_accepted_at', optional(string())],
  uninvitedCount: ['uninvited_count', optional(number())],
});
