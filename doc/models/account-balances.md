
# Account Balances

## Structure

`AccountBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `openInvoices` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | The balance, in cents, of the sum of the subscription's open, payable invoices. |
| `pendingInvoices` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | The balance, in cents, of the sum of the subscription's pending, payable invoices. |
| `pendingDiscounts` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | The balance, in cents, of the subscription's Pending Discount account. |
| `serviceCredits` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | The balance, in cents, of the subscription's Service Credit account. |
| `prepayments` | [`AccountBalance \| undefined`](../../doc/models/account-balance.md) | Optional | The balance, in cents, of the subscription's Prepayment account. |

## Example

```ts
import { AccountBalances } from '@maxio-com/advanced-billing-sdk';

const accountBalances: AccountBalances = {
  openInvoices: {
    balanceInCents: BigInt(40),
    automaticBalanceInCents: BigInt(202),
    remittanceBalanceInCents: BigInt(170),
  },
  pendingInvoices: {
    balanceInCents: BigInt(0),
    automaticBalanceInCents: BigInt(242),
    remittanceBalanceInCents: BigInt(46),
  },
  pendingDiscounts: {
    balanceInCents: BigInt(88),
    automaticBalanceInCents: BigInt(154),
    remittanceBalanceInCents: BigInt(134),
  },
  serviceCredits: {
    balanceInCents: BigInt(84),
    automaticBalanceInCents: BigInt(70),
    remittanceBalanceInCents: BigInt(38),
  },
  prepayments: {
    balanceInCents: BigInt(192),
    automaticBalanceInCents: BigInt(178),
    remittanceBalanceInCents: BigInt(146),
  },
};
```

