
# Wallet Grant

A funding tranche embedded on the wallet. `original` is the amount the grant was created with; `posted_remaining` is what debits and adjustments written to the ledger have left; `remaining` is what can still be spent. Debits drain grants earliest-expiration-first (grants with no expiration are drained last).

## Structure

`WalletGrant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Advanced Billing id of the grant. |
| `name` | `string \| undefined` | Optional | The memo the grant was created with, or `Grant |
| `original` | `string \| undefined` | Optional | The amount the grant was created with, encoded as a decimal string. Never changes after creation. |
| `remaining` | `string \| undefined` | Optional | What the grant can still spend, encoded as a decimal string. On [Read Wallet](../../doc/controllers/wallets.md#read-wallet) for a metered wallet whose `balance` is the live figure, this is `posted_remaining` less the pending usage drawn from this grant in drain order: usage past a grant spills to the next one, and usage past every grant is an overdraft that belongs to no grant. It never goes below zero, and the grants' `remaining` add up to the wallet's `balance` whenever `balance` is zero or more. Everywhere else it equals `posted_remaining`. |
| `postedRemaining` | `string \| undefined` | Optional | The grant's remainder from written ledger entries alone, encoded as a decimal string. Always present. This is the figure an adjustment checks `expected_remaining` and its bounds against, so send it back, not `remaining`, when correcting a grant. |
| `expiresAt` | `string \| null \| undefined` | Optional | When this grant's unconsumed remainder is automatically written off. `null` for an evergreen grant. |
| `expiresOn` | `string \| null \| undefined` | Optional | The calendar day `expires_at` falls on, already resolved in the site's time zone. |
| `expiredAt` | `string \| null \| undefined` | Optional | When the expiry sweep actually wrote this grant's remainder off. Usually falls shortly after `expires_at`; use `expires_on` for the date the grant expired, not this field. `null` if the grant was never written off (including a grant simply spent to zero before its `expires_at`). |
| `expiredOn` | `string \| null \| undefined` | Optional | The calendar day `expired_at` falls on, resolved in the site's time zone. |
| `origin` | [`Origin \| undefined`](../../doc/models/origin.md) | Optional | How the grant was created. `recurring` comes from the wallet's automatic funding schedule (see the wallet's `recurring_funding` array). `manual` comes from a one-time grant posted to [Create Wallet Transaction](../../doc/controllers/wallet-transactions.md#create-wallet-transaction). `initial_balance` comes from a non-zero `initial_balance` at wallet creation. `allowance_increase` comes from raising a funding entitlement's allowance while it's already funding a wallet. `purchase` comes from [Create Wallet Purchase](../../doc/controllers/wallet-purchases.md#create-wallet-purchase). |
| `grantedForPeriodStart` | `string \| null \| undefined` | Optional | For a `recurring` grant, the start of the funding cadence period this grant covers. `null` for every other origin. After a gap in funding (see `skipped_periods`), this is the period currently in progress, not the oldest period that was missed. |
| `invoiceUid` | `string \| null \| undefined` | Optional | The uid of the invoice that paid for this grant, for a grant with `origin` of `purchase`. `null` for every other origin. |
| `createdAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { WalletGrant } from '@maxio-com/advanced-billing-sdk';

const walletGrant: WalletGrant = {
  id: 8,
  name: 'name4',
  original: '100.0',
  remaining: '50.0',
  postedRemaining: '50.0',
};
```

