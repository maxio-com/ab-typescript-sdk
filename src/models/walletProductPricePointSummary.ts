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
} from '../schema.js';

/** A summary of the Wallet Product's default price point, for rendering a catalog listing without a separate price points call. */
export interface WalletProductPricePointSummary {
  /** Number of archived price points on this Wallet Product. */
  archivedCount?: number;
  /** The default price point's pricing scheme. `null` if the Wallet Product has no default price point. */
  pricingScheme?: string | null;
  /** Number of price brackets on the default price point. A `per_unit` scheme always stores exactly one synthesized bracket, so this is `1` for `per_unit`, not `0`. */
  tierCount?: number;
  /** The unit price of the default price point's first bracket, as a decimal string. `null` if there are no brackets. */
  entryPrice?: string | null;
  /** The unit price of the default price point's last bracket, as a decimal string. `null` if there are no brackets. */
  finalPrice?: string | null;
  [key: string]: unknown;
}

export const walletProductPricePointSummarySchema: Schema<WalletProductPricePointSummary> = expandoObject(
  {
    archivedCount: ['archived_count', optional(number())],
    pricingScheme: ['pricing_scheme', optional(nullable(string()))],
    tierCount: ['tier_count', optional(number())],
    entryPrice: ['entry_price', optional(nullable(string()))],
    finalPrice: ['final_price', optional(nullable(string()))],
  }
);
