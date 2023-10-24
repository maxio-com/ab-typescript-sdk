/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CancellationOptions {
  /** For your internal use. An indication as to why the subscription is being canceled. */
  cancellationMessage?: string;
  /** The reason code associated with the cancellation. See the list of reason codes associated with your site. */
  reasonCode?: string;
}

export const cancellationOptionsSchema: Schema<CancellationOptions> = object({
  cancellationMessage: ['cancellation_message', optional(string())],
  reasonCode: ['reason_code', optional(string())],
});
