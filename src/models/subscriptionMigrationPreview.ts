/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, expandoObject, optional, Schema } from '../schema';

export interface SubscriptionMigrationPreview {
  /** The amount of the prorated adjustment that would be issued for the current subscription. */
  proratedAdjustmentInCents?: bigint;
  /** The amount of the charge that would be created for the new product. */
  chargeInCents?: bigint;
  /** The amount of the payment due in the case of an upgrade. */
  paymentDueInCents?: bigint;
  /** Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. */
  creditAppliedInCents?: bigint;
  [key: string]: unknown;
}

export const subscriptionMigrationPreviewSchema: Schema<SubscriptionMigrationPreview> = expandoObject(
  {
    proratedAdjustmentInCents: [
      'prorated_adjustment_in_cents',
      optional(bigint()),
    ],
    chargeInCents: ['charge_in_cents', optional(bigint())],
    paymentDueInCents: ['payment_due_in_cents', optional(bigint())],
    creditAppliedInCents: ['credit_applied_in_cents', optional(bigint())],
  }
);
