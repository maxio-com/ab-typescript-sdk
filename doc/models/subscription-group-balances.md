
# Subscription Group Balances

## Structure

`SubscriptionGroupBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayments` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |
| `serviceCredits` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |
| `openInvoices` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |
| `pendingDiscounts` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | - |

## Example

```ts
import { SubscriptionGroupBalances } from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupBalances: SubscriptionGroupBalances = {
  prepayments: {
    balanceInCents: BigInt(192),
    automaticBalanceInCents: BigInt(178),
    remittanceBalanceInCents: BigInt(146),
  },
  serviceCredits: {
    balanceInCents: BigInt(84),
    automaticBalanceInCents: BigInt(70),
    remittanceBalanceInCents: BigInt(38),
  },
  openInvoices: {
    balanceInCents: BigInt(40),
    automaticBalanceInCents: BigInt(202),
    remittanceBalanceInCents: BigInt(170),
  },
  pendingDiscounts: {
    balanceInCents: BigInt(88),
    automaticBalanceInCents: BigInt(154),
    remittanceBalanceInCents: BigInt(134),
  },
};
```

