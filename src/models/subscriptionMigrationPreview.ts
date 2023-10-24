/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface SubscriptionMigrationPreview {
  /** The amount of the prorated adjustment that would be issued for the current subscription. */
  proratedAdjustmentInCents?: number;
  /** The amount of the charge that would be created for the new product. */
  chargeInCents?: number;
  /** The amount of the payment due in the case of an upgrade. */
  paymentDueInCents?: number;
  /** Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. */
  creditAppliedInCents?: number;
}

export const subscriptionMigrationPreviewSchema: Schema<SubscriptionMigrationPreview> = object(
  {
    proratedAdjustmentInCents: [
      'prorated_adjustment_in_cents',
      optional(number()),
    ],
    chargeInCents: ['charge_in_cents', optional(number())],
    paymentDueInCents: ['payment_due_in_cents', optional(number())],
    creditAppliedInCents: ['credit_applied_in_cents', optional(number())],
  }
);
