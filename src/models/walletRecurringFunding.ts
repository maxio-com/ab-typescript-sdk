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
import { Reason, reasonSchema } from './reason.js';
import {
  WalletRecurringFundingStatus,
  walletRecurringFundingStatusSchema,
} from './walletRecurringFundingStatus.js';

/** Describes automatic funding of the wallet from a usage-limit entitlement. Set up by configuring `wallet_behavior` on the Feature behind that entitlement, not by any parameter on the wallet itself. This field is an array as of its first release. The array currently holds zero or one element, and is expected to hold several once a wallet can be funded by more than one entitlement. */
export interface WalletRecurringFunding {
  /** The Advanced Billing id of the recurring funding schedule. */
  id?: number;
  /** The usage-limit entitlement this schedule reads its allowance and cadence from. */
  entitlementId?: number;
  /** The entitlement's current allowance, read fresh at request time rather than stored on the wallet. Editing the entitlement changes this immediately, with no separate sync step. `"0"` means the entitlement is configured to grant nothing, a valid, working configuration and not an error. `null` when `status` is `stopped`, since there is no longer an entitlement to read. */
  allowance?: string | null;
  /** When the next automatic grant is due. Grants are applied by a background process shortly after this moment passes, not exactly on it, so a wallet read taken in that window still shows the pre-grant balance. `null` when `status` is `stopped`, and also `null` once the owning subscription has terminated, even while `status` is still `active`: at its next due moment the schedule is stopped with reason `subscription_terminated`. */
  nextGrantAt?: string | null;
  /** The calendar day `next_grant_at` falls on, resolved in the site's time zone. `null` under the same conditions as `next_grant_at`. */
  nextGrantOn?: string | null;
  /** Cumulative count of due moments that passed without a grant being made (for example, during an outage). A gap in funding is visible here without cross-referencing the ledger. */
  skippedPeriods?: number;
  /** `active`: refilling normally. `erroring`: the schedule is still due and retrying, but the last attempt couldn't be written (see `reason`); correcting the underlying entitlement resumes funding on the next run with no action needed on the wallet itself. `stopped`: funding has ended for good (see `reason`); units already granted stay on the wallet and remain spendable, but no further automatic grants will be made. */
  status?: WalletRecurringFundingStatus;
  /** Set whenever `status` isn't `active`. Accompanying `stopped`: `entitlement_missing` (an ordinary product or component change removed the entitlement), `wallet_archived` (the wallet was archived), `subscription_terminated` (the subscription reached a terminal state; funding resumes if the subscription returns to a granting state, for example on reactivation, without back-granting the periods it missed), `feature_removed` (the subscription no longer has this Feature), `wallet_behavior_disabled` (the Feature no longer has `wallet_behavior` configured), `superseded_by_replacement` (a later entitlement now funds this wallet instead), or `subscription_prepaid` (the subscription switched to prepaid, which cannot carry an active wallet). Accompanying `erroring`: `allowance_not_representable` (the entitlement's current allowance doesn't fit the wallet's amount encoding) or `balance_at_capacity` (granting it would push the balance past the maximum supported value). */
  reason?: Reason | null;
  [key: string]: unknown;
}

export const walletRecurringFundingSchema: Schema<WalletRecurringFunding> = expandoObject(
  {
    id: ['id', optional(number())],
    entitlementId: ['entitlement_id', optional(number())],
    allowance: ['allowance', optional(nullable(string()))],
    nextGrantAt: ['next_grant_at', optional(nullable(string()))],
    nextGrantOn: ['next_grant_on', optional(nullable(string()))],
    skippedPeriods: ['skipped_periods', optional(number())],
    status: ['status', optional(walletRecurringFundingStatusSchema)],
    reason: ['reason', optional(nullable(reasonSchema))],
  }
);
