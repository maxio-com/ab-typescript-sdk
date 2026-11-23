
# Wallet

A balance, denominated in the unit of a Wallet Product, owned by a subscription. Grants and recurring funding schedules are embedded so a single read shows the full balance breakdown.

## Structure

`Wallet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Advanced Billing id of the wallet. |
| `ownerType` | [`OwnerType \| undefined`](../../doc/models/owner-type.md) | Optional | The polymorphic owner type. `subscription` is the only value currently supported. |
| `ownerId` | `number \| undefined` | Optional | The id of the owning subscription. |
| `name` | `string \| null \| undefined` | Optional | (Optional) A merchant-facing label for the wallet, set on create and changeable with [Update Wallet](../../doc/controllers/wallets.md#update-wallet). Surrounding spaces are stripped; a blank value is stored as `null`. |
| `walletProductId` | `number \| undefined` | Optional | The id of the [Wallet Product](../../doc/controllers/wallet-products.md#create-wallet-product) that denominates the wallet. Immutable for the life of the wallet. |
| `walletProductName` | `string \| undefined` | Optional | The name of the Wallet Product that denominates the wallet. |
| `unit` | `string \| undefined` | Optional | The billing product's unit name, immutable for the life of the wallet. |
| `pricePointId` | `number \| null \| undefined` | Optional | The price point that priced this wallet's [purchases](../../doc/controllers/wallet-purchases.md#create-wallet-purchase), set on create and immutable afterward. Defaults to the Wallet Product's default price point; `null` if the Wallet Product has none and none was given on create. |
| `balance` | `string \| undefined` | Optional | What the wallet can spend now, encoded as a decimal string to avoid floating-point precision loss. This is the number to enforce against. For a metered wallet, it includes usage not yet posted to the ledger, through `metered_through_at`, but only in the response from [Read Wallet](../../doc/controllers/wallets.md#read-wallet); every other response (list, create, update, archive) reports the balance as of the last ledger write, equal to `posted_balance`, even for a metered wallet. The grants' `remaining` follow this figure, so they add up to it whenever it is zero or more. |
| `postedBalance` | `string \| undefined` | Optional | The balance from written ledger entries alone: grants funded, minus debits written to the ledger, as a decimal string. Always present, also for a wallet with no meter. It equals `balance` wherever no live metered balance is computed: list, create, update, and archive responses, an unlinked or archived wallet, and a read where `metered_stale` is `true`. Only an active, metered wallet read through [Read Wallet](../../doc/controllers/wallets.md#read-wallet), with `metered_stale` not `true`, can have a `balance` below its `posted_balance`. It stays exact when `metered_stale` is `true`. Reconcile the transactions list (`balance_after`) against this figure, not against `balance`. |
| `meter` | [`Meter \| null \| undefined`](../../doc/models/meter.md) | Optional | The metering meter this wallet is paired with, or `null` for a wallet with no meter. Set on create and immutable afterward. |
| `meteredThroughAt` | `string \| null \| undefined` | Optional | The point up to which live meter usage has been factored into `balance`. Populated only in the response from [Read Wallet](../../doc/controllers/wallets.md#read-wallet), for an active, metered wallet on a site with metered consumption enabled; `null` everywhere else, including list, create, update, and archive responses for the same wallet. |
| `meteredRecheckAfterSeconds` | `number \| null \| undefined` | Optional | How many seconds to wait before re-reading `balance` to see usage past `metered_through_at`. Same availability as `metered_through_at`. |
| `meteredStale` | `boolean \| null \| undefined` | Optional | `true` when live usage could not be read fresh and `balance` reflects an earlier snapshot. Same availability as `metered_through_at`. |
| `status` | [`WalletStatus \| undefined`](../../doc/models/wallet-status.md) | Optional | - |
| `depletionPolicy` | `string \| undefined` | Optional | What happens when a debit would take the wallet below zero. Known values: `hard_stop` (the only value you can set today). More values are expected over time, so treat this as an open string and don't fail on one you don't recognize. At the zero boundary, `hard_stop` behaves as set by `hard_stop_overflow`. |
| `hardStopOverflow` | [`WalletHardStopOverflow \| undefined`](../../doc/models/wallet-hard-stop-overflow.md) | Optional | Behavior at the hard-stop boundary. `discard` drains the wallet to zero and rejects the excess (the default). `allow_negative` deducts the full amount, letting the balance go negative. The excess past the wallet's grants is booked as an overdraft ledger row with `grant_id` set to `null`. |
| `origin` | [`WalletOrigin \| undefined`](../../doc/models/wallet-origin.md) | Optional | How the wallet came to exist. `manual` for a wallet created directly with [Create Wallet](../../doc/controllers/wallets.md#create-wallet). `feature` for a wallet auto-provisioned because a subscription resolved a usage-limit entitlement whose Feature has `wallet_behavior` configured. |
| `featureKey` | `string \| null \| undefined` | Optional | The key of the Feature this wallet was provisioned for, when `origin` is `feature`. `null` for a `manual` wallet. |
| `grants` | [`WalletGrant[] \| undefined`](../../doc/models/wallet-grant.md) | Optional | Every grant on the wallet, including ones already spent or expired, in drain order (the order debits would consume the still-open ones in): the soonest-expiring grant first, evergreen grants last. |
| `recurringFunding` | [`WalletRecurringFunding[] \| undefined`](../../doc/models/wallet-recurring-funding.md) | Optional | The wallet's automatic funding schedules, if any. Empty for a `manual` wallet with no funding entitlement. A wallet funds automatically when it's provisioned from a Feature with `wallet_behavior` configured; see [the Wallets concept guide](page:introduction/basic-concepts/wallets#provisioning-a-wallet-from-a-feature). |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { OwnerType, Wallet } from '@maxio-com/advanced-billing-sdk';

const wallet: Wallet = {
  id: 240,
  ownerType: OwnerType.Subscription,
  ownerId: 60,
  name: 'name6',
  walletProductId: 232,
  unit: 'tokens',
  balance: '150.0',
  postedBalance: '150.0',
  depletionPolicy: 'hard_stop',
};
```

