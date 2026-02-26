/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface CancellationOptions {
  /** An indication as to why the subscription is being canceled. For your internal use. */
  cancellationMessage?: string;
  /** The reason code associated with the cancellation. Use the [List Reason Codes]($e/Reason%20Codes/listReasonCodes) endpoint to retrieve the reason codes associated with your site. */
  reasonCode?: string;
  /** When true, the subscription is cancelled at the current period end instead of immediately. To use this option, the Schedule Subscription Cancellation feature must be enabled on your site. */
  cancelAtEndOfPeriod?: boolean;
  /** Schedules the cancellation on the provided date. This is option is not applicable for prepaid subscriptions. To use this option, the Schedule Subscription Cancellation feature must be enabled on your site. */
  scheduledCancellationAt?: string | null;
  /** Applies to prepaid subscriptions. When true, which is the default, the remaining prepaid balance is refunded as part of cancellation processing. When false, prepaid balance is not refunded as part of cancellation processing. To use this option, the Schedule Subscription Cancellation feature must be enabled on your site. */
  refundPrepaymentAccountBalance?: boolean;
  [key: string]: unknown;
}

export const cancellationOptionsSchema: Schema<CancellationOptions> = expandoObject(
  {
    cancellationMessage: ['cancellation_message', optional(string())],
    reasonCode: ['reason_code', optional(string())],
    cancelAtEndOfPeriod: ['cancel_at_end_of_period', optional(boolean())],
    scheduledCancellationAt: [
      'scheduled_cancellation_at',
      optional(nullable(string())),
    ],
    refundPrepaymentAccountBalance: [
      'refund_prepayment_account_balance',
      optional(boolean()),
    ],
  }
);
