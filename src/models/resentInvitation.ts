/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ResentInvitation {
  lastSentAt?: string;
  lastAcceptedAt?: string;
  sendInviteLinkText?: string;
  uninvitedCount?: number;
}

export const resentInvitationSchema: Schema<ResentInvitation> = object({
  lastSentAt: ['last_sent_at', optional(string())],
  lastAcceptedAt: ['last_accepted_at', optional(string())],
  sendInviteLinkText: ['send_invite_link_text', optional(string())],
  uninvitedCount: ['uninvited_count', optional(number())],
});
