/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface Webhook {
  /** A string describing which event type produced the given webhook */
  event?: string;
  /** The unique identifier for the webhooks (unique across all of Chargify). This is not changed on a retry/replay of the same webhook, so it may be used to avoid duplicate action for the same event. */
  id?: number;
  /** Timestamp indicating when the webhook was created */
  createdAt?: string;
  /** Text describing the status code and/or error from the last failed attempt to send the Webhook. When a webhook is retried and accepted, this field will be cleared. */
  lastError?: string;
  /** Timestamp indicating when the last non-acceptance occurred. If a webhook is later resent and accepted, this field will be cleared. */
  lastErrorAt?: string;
  /** Timestamp indicating when the webhook was accepted by the merchant endpoint. When a webhook is explicitly replayed by the merchant, this value will be cleared until it is accepted again. */
  acceptedAt?: string | null;
  /** Timestamp indicating when the most recent attempt was made to send the webhook */
  lastSentAt?: string;
  /** The url that the endpoint was last sent to. */
  lastSentUrl?: string;
  /** A boolean flag describing whether the webhook was accepted by the webhook endpoint for the most recent attempt. (Acceptance is defined by receiving a “200 OK” HTTP response within a reasonable timeframe, i.e. 15 seconds) */
  successful?: boolean;
  /** The data sent within the webhook post */
  body?: string;
  /** The calculated webhook signature */
  signature?: string;
  /** The calculated HMAC-SHA-256 webhook signature */
  signatureHmacSha256?: string;
}

export const webhookSchema: Schema<Webhook> = object({
  event: ['event', optional(string())],
  id: ['id', optional(number())],
  createdAt: ['created_at', optional(string())],
  lastError: ['last_error', optional(string())],
  lastErrorAt: ['last_error_at', optional(string())],
  acceptedAt: ['accepted_at', optional(nullable(string()))],
  lastSentAt: ['last_sent_at', optional(string())],
  lastSentUrl: ['last_sent_url', optional(string())],
  successful: ['successful', optional(boolean())],
  body: ['body', optional(string())],
  signature: ['signature', optional(string())],
  signatureHmacSha256: ['signature_hmac_sha_256', optional(string())],
});
