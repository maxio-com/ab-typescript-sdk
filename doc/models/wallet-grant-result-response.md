
# Wallet Grant Result Response

Returned by an adjustment: the ledger row written, plus the wallet's new balance.

## Structure

`WalletGrantResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletTransactions` | [`WalletTransaction[]`](../../doc/models/wallet-transaction.md) | Required | - |
| `balance` | `string` | Required | The wallet's new balance, as a decimal string. |

## Example

```ts
import { WalletGrantResultResponse } from '@maxio-com/advanced-billing-sdk';

const walletGrantResultResponse: WalletGrantResultResponse = {
  walletTransactions: [
    {
      id: 140,
      walletId: 244,
      kind: 'grant',
      amount: '-30.0',
      grantId: 160,
    }
  ],
  balance: 'balance8',
};
```

