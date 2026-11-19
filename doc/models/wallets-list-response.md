
# Wallets List Response

## Structure

`WalletsListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wallets` | [`Wallet[]`](../../doc/models/wallet.md) | Required | - |
| `meta` | [`ListPublicKeysMeta`](../../doc/models/list-public-keys-meta.md) | Required | - |

## Example

```ts
import {
  OwnerType,
  WalletsListResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletsListResponse: WalletsListResponse = {
  wallets: [
    {
      id: 80,
      ownerType: OwnerType.Subscription,
      ownerId: 156,
      name: 'name4',
      walletProductId: 72,
      unit: 'tokens',
      balance: '150.0',
      postedBalance: '150.0',
      depletionPolicy: 'hard_stop',
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

