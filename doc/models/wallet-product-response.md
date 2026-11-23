
# Wallet Product Response

A Wallet Product is a Component created with no product family, so it returns the full Component field set under a `wallet_product` root instead of `component`.

## Structure

`WalletProductResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletProduct` | [`Component`](../../doc/models/component.md) | Required | - |

## Example

```ts
import {
  ItemCategory,
  PricingScheme,
  WalletProductResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletProductResponse: WalletProductResponse = {
  walletProduct: {
    id: 224,
    name: 'name0',
    handle: 'handle6',
    pricingScheme: PricingScheme.PerUnit,
    unitName: 'unit_name2',
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};
```

