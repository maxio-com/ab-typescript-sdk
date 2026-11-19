
# Wallet Product 1

## Structure

`WalletProduct1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `taxable` | `boolean \| undefined` | Optional | - |
| `taxCode` | `string \| null \| undefined` | Optional | - |
| `accountingCode` | `string \| null \| undefined` | Optional | - |
| `itemCategory` | [`ItemCategory \| null \| undefined`](../../doc/models/item-category.md) | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |

## Example

```ts
import {
  ItemCategory,
  WalletProduct1,
} from '@maxio-com/advanced-billing-sdk';

const walletProduct1: WalletProduct1 = {
  name: 'name8',
  description: 'description8',
  taxable: false,
  taxCode: 'tax_code6',
  accountingCode: 'accounting_code4',
  itemCategory: ItemCategory.EnumBusinessSoftware,
};
```

