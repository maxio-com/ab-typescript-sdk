
# Create Wallet Purchase Request

Purchases prepaid units for the wallet at a price point, charging the subscription's payment method.

## Structure

`CreateWalletPurchaseRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `purchase` | [`Purchase`](../../doc/models/purchase.md) | Required | - |

## Example

```ts
import { CreateWalletPurchaseRequest } from '@maxio-com/advanced-billing-sdk';

const createWalletPurchaseRequest: CreateWalletPurchaseRequest = {
  purchase: {
    quantity: 'String5',
    pricePointId: 20,
    memo: 'memo2',
  },
};
```

