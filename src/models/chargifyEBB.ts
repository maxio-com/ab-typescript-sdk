/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ChargifyEBB {
  /** This timestamp determines what billing period the event will be billed in. If your request payload does not include it, Chargify will add `chargify.timestamp` to the event payload and set the value to `now`. */
  timestamp?: string;
  /** A unique ID set by Chargify. Please note that this field is reserved. If `chargify.id` is present in the request payload, it will be overwritten. */
  id?: string;
  /** An ISO-8601 timestamp, set by Chargify at the time each event is recorded. Please note that this field is reserved. If `chargify.created_at` is present in the request payload, it will be overwritten. */
  createdAt?: string;
  /** User-defined string scoped per-stream. Duplicate events within a stream will be silently ignored. Tokens expire after 31 days. */
  uniquenessToken?: string;
}

export const chargifyEBBSchema: Schema<ChargifyEBB> = object({
  timestamp: ['timestamp', optional(string())],
  id: ['id', optional(string())],
  createdAt: ['created_at', optional(string())],
  uniquenessToken: ['uniqueness_token', optional(string())],
});
