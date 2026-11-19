
# Wallet Transactions List Response

## Structure

`WalletTransactionsListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletTransactions` | [`WalletTransaction[]`](../../doc/models/wallet-transaction.md) | Required | - |
| `meta` | [`ListPublicKeysMeta`](../../doc/models/list-public-keys-meta.md) | Required | - |

## Example

```ts
import {
  WalletTransactionsListResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletTransactionsListResponse: WalletTransactionsListResponse = {
  walletTransactions: [
    {
      id: 140,
      walletId: 244,
      kind: 'grant',
      amount: '-30.0',
      grantId: 160,
    }
  ],
  meta: {
    totalCount: 150,
    currentPage: 126,
    totalPages: 138,
    perPage: 152,
  },
};
```

