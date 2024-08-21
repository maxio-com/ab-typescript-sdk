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

export interface PortalManagementLink {
  url?: string;
  fetchCount?: number;
  createdAt?: string;
  newLinkAvailableAt?: string;
  expiresAt?: string;
  lastInviteSentAt?: string | null;
  [key: string]: unknown;
}

export const portalManagementLinkSchema: Schema<PortalManagementLink> = expandoObject(
  {
    url: ['url', optional(string())],
    fetchCount: ['fetch_count', optional(number())],
    createdAt: ['created_at', optional(string())],
    newLinkAvailableAt: ['new_link_available_at', optional(string())],
    expiresAt: ['expires_at', optional(string())],
    lastInviteSentAt: ['last_invite_sent_at', optional(nullable(string()))],
  }
);
