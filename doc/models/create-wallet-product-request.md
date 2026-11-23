
# Create Wallet Product Request

Does not accept `product_family_id`: a Wallet Product never belongs to a product family. The underlying endpoint accepts the param, but only to reject it; sending one returns `422` ("Product family cannot be set on a wallet product") rather than silently ignoring it.

## Structure

`CreateWalletProductRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletProduct` | [`WalletProduct`](../../doc/models/wallet-product.md) | Required | - |

## Example

```ts
import {
  CreateWalletProductRequest,
  ItemCategory,
} from '@maxio-com/advanced-billing-sdk';

const createWalletProductRequest: CreateWalletProductRequest = {
  walletProduct: {
    name: 'name0',
    unitName: 'unit_name2',
    handle: 'handle6',
    description: 'description0',
    taxable: false,
    taxCode: 'tax_code8',
    accountingCode: 'accounting_code6',
    itemCategory: ItemCategory.EnumBusinessSoftware,
  },
};
```

