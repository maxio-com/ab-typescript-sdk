/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

/** One wallet template billing through this Wallet Product, joined to the Feature and plan/component that assigns it, when there is one. */
export interface WalletProductUsageTemplate {
  /** The name of the product or component the Feature is assigned to. `null` when the wallet template has no assigning Feature. */
  planName?: string | null;
  /** The label set in `wallet_behavior.name` on the Feature, or the standalone wallet's own `name`. */
  walletTemplateName?: string | null;
  unitName?: string;
  /** A best-effort label for how this wallet is expected to be replenished. Currently reports `"Overage"` when the wallet template allows a negative balance, and `null` otherwise; there's no persisted field yet distinguishing, for example, an intended "Auto top-up" from "Purchase more" setup. Treat this as informational, not a stable enum. */
  purchaseMechanism?: string | null;
  pricePointName?: string | null;
  currency?: string;
  /** `false` when the assigning Feature is archived. */
  active?: boolean;
  featureTemplateId?: number | null;
  featureTemplateName?: string | null;
  /** `true` when this wallet template is priced at a price point other than the Wallet Product's default. */
  pricePointOverride?: boolean;
  [key: string]: unknown;
}

export const walletProductUsageTemplateSchema: Schema<WalletProductUsageTemplate> = expandoObject(
  {
    planName: ['plan_name', optional(nullable(string()))],
    walletTemplateName: ['wallet_template_name', optional(nullable(string()))],
    unitName: ['unit_name', optional(string())],
    purchaseMechanism: ['purchase_mechanism', optional(nullable(string()))],
    pricePointName: ['price_point_name', optional(nullable(string()))],
    currency: ['currency', optional(string())],
    active: ['active', optional(boolean())],
    featureTemplateId: ['feature_template_id', optional(nullable(number()))],
    featureTemplateName: [
      'feature_template_name',
      optional(nullable(string())),
    ],
    pricePointOverride: ['price_point_override', optional(boolean())],
  }
);
