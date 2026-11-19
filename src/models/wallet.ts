/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import { Meter, meterSchema } from './meter.js';
import { OwnerType, ownerTypeSchema } from './ownerType.js';
import { WalletGrant, walletGrantSchema } from './walletGrant.js';
import {
  WalletHardStopOverflow,
  walletHardStopOverflowSchema,
} from './walletHardStopOverflow.js';
import { WalletOrigin, walletOriginSchema } from './walletOrigin.js';
import {
  WalletRecurringFunding,
  walletRecurringFundingSchema,
} from './walletRecurringFunding.js';
import { WalletStatus, walletStatusSchema } from './walletStatus.js';

/** A balance, denominated in the unit of a Wallet Product, owned by a subscription. Grants and recurring funding schedules are embedded so a single read shows the full balance breakdown. */
export interface Wallet {
  /** The Advanced Billing id of the wallet. */
  id?: number;
  /** The polymorphic owner type. `subscription` is the only value currently supported. */
  ownerType?: OwnerType;
  /** The id of the owning subscription. */
  ownerId?: number;
  /** (Optional) A merchant-facing label for the wallet, set on create and changeable with [Update Wallet]($e/Wallets/updateWallet). Surrounding spaces are stripped; a blank value is stored as `null`. */
  name?: string | null;
  /** The id of the [Wallet Product]($e/Wallet%20Products/createWalletProduct) that denominates the wallet. Immutable for the life of the wallet. */
  walletProductId?: number;
  /** The name of the Wallet Product that denominates the wallet. */
  walletProductName?: string;
  /** The billing product's unit name, immutable for the life of the wallet. */
  unit?: string;
  /** The price point that priced this wallet's [purchases]($e/Wallet%20Purchases/createWalletPurchase), set on create and immutable afterward. Defaults to the Wallet Product's default price point; `null` if the Wallet Product has none and none was given on create. */
  pricePointId?: number | null;
  /** What the wallet can spend now, encoded as a decimal string to avoid floating-point precision loss. This is the number to enforce against. For a metered wallet, it includes usage not yet posted to the ledger, through `metered_through_at`, but only in the response from [Read Wallet]($e/Wallets/readWallet); every other response (list, create, update, archive) reports the balance as of the last ledger write, equal to `posted_balance`, even for a metered wallet. The grants' `remaining` follow this figure, so they add up to it whenever it is zero or more. */
  balance?: string;
  /** The balance from written ledger entries alone: grants funded, minus debits written to the ledger, as a decimal string. Always present, also for a wallet with no meter. It equals `balance` wherever no live metered balance is computed: list, create, update, and archive responses, an unlinked or archived wallet, and a read where `metered_stale` is `true`. Only an active, metered wallet read through [Read Wallet]($e/Wallets/readWallet), with `metered_stale` not `true`, can have a `balance` below its `posted_balance`. It stays exact when `metered_stale` is `true`. Reconcile the transactions list (`balance_after`) against this figure, not against `balance`. */
  postedBalance?: string;
  /** The metering meter this wallet is paired with, or `null` for a wallet with no meter. Set on create and immutable afterward. */
  meter?: Meter | null;
  /** The point up to which live meter usage has been factored into `balance`. Populated only in the response from [Read Wallet]($e/Wallets/readWallet), for an active, metered wallet on a site with metered consumption enabled; `null` everywhere else, including list, create, update, and archive responses for the same wallet. */
  meteredThroughAt?: string | null;
  /** How many seconds to wait before re-reading `balance` to see usage past `metered_through_at`. Same availability as `metered_through_at`. */
  meteredRecheckAfterSeconds?: number | null;
  /** `true` when live usage could not be read fresh and `balance` reflects an earlier snapshot. Same availability as `metered_through_at`. */
  meteredStale?: boolean | null;
  status?: WalletStatus;
  /** What happens when a debit would take the wallet below zero. Known values: `hard_stop` (the only value you can set today). More values are expected over time, so treat this as an open string and don't fail on one you don't recognize. At the zero boundary, `hard_stop` behaves as set by `hard_stop_overflow`. */
  depletionPolicy?: string;
  /** Behavior at the hard-stop boundary. `discard` drains the wallet to zero and rejects the excess (the default). `allow_negative` deducts the full amount, letting the balance go negative. The excess past the wallet's grants is booked as an overdraft ledger row with `grant_id` set to `null`. */
  hardStopOverflow?: WalletHardStopOverflow;
  /** How the wallet came to exist. `manual` for a wallet created directly with [Create Wallet]($e/Wallets/createWallet). `feature` for a wallet auto-provisioned because a subscription resolved a usage-limit entitlement whose Feature has `wallet_behavior` configured. */
  origin?: WalletOrigin;
  /** The key of the Feature this wallet was provisioned for, when `origin` is `feature`. `null` for a `manual` wallet. */
  featureKey?: string | null;
  /** Every grant on the wallet, including ones already spent or expired, in drain order (the order debits would consume the still-open ones in): the soonest-expiring grant first, evergreen grants last. */
  grants?: WalletGrant[];
  /** The wallet's automatic funding schedules, if any. Empty for a `manual` wallet with no funding entitlement. A wallet funds automatically when it's provisioned from a Feature with `wallet_behavior` configured; see [the Wallets concept guide](page:introduction/basic-concepts/wallets#provisioning-a-wallet-from-a-feature). */
  recurringFunding?: WalletRecurringFunding[];
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export const walletSchema: Schema<Wallet> = lazy(() =>
  expandoObject({
    id: ['id', optional(number())],
    ownerType: ['owner_type', optional(ownerTypeSchema)],
    ownerId: ['owner_id', optional(number())],
    name: ['name', optional(nullable(string()))],
    walletProductId: ['wallet_product_id', optional(number())],
    walletProductName: ['wallet_product_name', optional(string())],
    unit: ['unit', optional(string())],
    pricePointId: ['price_point_id', optional(nullable(number()))],
    balance: ['balance', optional(string())],
    postedBalance: ['posted_balance', optional(string())],
    meter: ['meter', optional(nullable(meterSchema))],
    meteredThroughAt: ['metered_through_at', optional(nullable(string()))],
    meteredRecheckAfterSeconds: [
      'metered_recheck_after_seconds',
      optional(nullable(number())),
    ],
    meteredStale: ['metered_stale', optional(nullable(boolean()))],
    status: ['status', optional(walletStatusSchema)],
    depletionPolicy: ['depletion_policy', optional(string())],
    hardStopOverflow: [
      'hard_stop_overflow',
      optional(walletHardStopOverflowSchema),
    ],
    origin: ['origin', optional(walletOriginSchema)],
    featureKey: ['feature_key', optional(nullable(string()))],
    grants: ['grants', optional(array(walletGrantSchema))],
    recurringFunding: [
      'recurring_funding',
      optional(array(walletRecurringFundingSchema)),
    ],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
  })
);
