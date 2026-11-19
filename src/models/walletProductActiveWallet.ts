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

/** One active wallet drawing on this Wallet Product. */
export interface WalletProductActiveWallet {
  /** The Advanced Billing id of the wallet. */
  id?: number;
  subscriptionId?: number;
  /** The owning customer's organization name, falling back to their full name, then to `"Customer #<id>"`. `"Customer"` (with no id) when the wallet's subscription has no customer at all. */
  companyName?: string;
  /** See the same field on [Wallet Product Usage Template]($m/Wallet%20Product%20Usage%20Template). The same caveats apply. */
  purchaseMechanism?: string | null;
  pricePointName?: string | null;
  currency?: string;
  /** `false` when the wallet's Feature is archived. */
  active?: boolean;
  [key: string]: unknown;
}

export const walletProductActiveWalletSchema: Schema<WalletProductActiveWallet> = expandoObject(
  {
    id: ['id', optional(number())],
    subscriptionId: ['subscription_id', optional(number())],
    companyName: ['company_name', optional(string())],
    purchaseMechanism: ['purchase_mechanism', optional(nullable(string()))],
    pricePointName: ['price_point_name', optional(nullable(string()))],
    currency: ['currency', optional(string())],
    active: ['active', optional(boolean())],
  }
);
