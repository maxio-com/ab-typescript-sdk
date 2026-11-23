
# Active Wallets

## Structure

`ActiveWallets`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `number` | Required | Total count of active wallets drawing on this product. |
| `sample` | [`WalletProductActiveWallet[]`](../../doc/models/wallet-product-active-wallet.md) | Required | Up to 50 of the most recently created active wallets, newest first. |

## Example

```ts
import { ActiveWallets } from '@maxio-com/advanced-billing-sdk';

const activeWallets: ActiveWallets = {
  total: 120,
  sample: [
    {
      id: 180,
      subscriptionId: 34,
      companyName: 'company_name4',
      purchaseMechanism: 'purchase_mechanism8',
      pricePointName: 'price_point_name8',
    }
  ],
};
```

