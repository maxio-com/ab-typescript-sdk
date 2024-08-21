/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ResentInvitation {
  lastSentAt?: string;
  lastAcceptedAt?: string;
  sendInviteLinkText?: string;
  uninvitedCount?: number;
  lastInviteSentAt?: string;
  lastInviteAcceptedAt?: string;
  [key: string]: unknown;
}

export const resentInvitationSchema: Schema<ResentInvitation> = expandoObject({
  lastSentAt: ['last_sent_at', optional(string())],
  lastAcceptedAt: ['last_accepted_at', optional(string())],
  sendInviteLinkText: ['send_invite_link_text', optional(string())],
  uninvitedCount: ['uninvited_count', optional(number())],
  lastInviteSentAt: ['last_invite_sent_at', optional(string())],
  lastInviteAcceptedAt: ['last_invite_accepted_at', optional(string())],
});
