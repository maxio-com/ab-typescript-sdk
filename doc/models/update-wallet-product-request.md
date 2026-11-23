
# Update Wallet Product Request

Only `name`, `description`, `taxable`, `tax_code`, `accounting_code`, and `item_category` are mutable. `unit_name`, `handle`, `price_point`, and `price_points` are not accepted here: the request still returns `200`, but those fields are silently ignored and nothing about them changes. `handle` stays fixed because it's the Wallet Product's only stable identifier on a surface with no product family in the path; `unit_name` stays fixed because a wallet's behavior snapshots it into the wallet's own `unit` field and never re-derives it.

## Structure

`UpdateWalletProductRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletProduct` | [`WalletProduct1`](../../doc/models/wallet-product-1.md) | Required | - |

## Example

```ts
import {
  ItemCategory,
  UpdateWalletProductRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateWalletProductRequest: UpdateWalletProductRequest = {
  walletProduct: {
    name: 'name0',
    description: 'description0',
    taxable: false,
    taxCode: 'tax_code8',
    accountingCode: 'accounting_code6',
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};
```

