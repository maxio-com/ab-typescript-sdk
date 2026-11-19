
# Create Wallet Transaction Request

## Structure

`CreateWalletTransactionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletTransaction` | [`WalletTransaction1`](../../doc/models/wallet-transaction-1.md) | Required | - |

## Example

```ts
import {
  CreateWalletTransactionRequest,
  Kind1,
} from '@maxio-com/advanced-billing-sdk';

const createWalletTransactionRequest: CreateWalletTransactionRequest = {
  walletTransaction: {
    kind: Kind1.Grant,
    amount: 'String5',
    memo: 'memo6',
    expiresAt: 'expires_at6',
  },
};
```

