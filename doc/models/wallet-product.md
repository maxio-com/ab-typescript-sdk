
# Wallet Product

## Structure

`WalletProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `unitName` | `string` | Required | The name of the unit the Wallet Product's usage is measured in, for example `tokens`. |
| `handle` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `taxable` | `boolean \| undefined` | Optional | - |
| `taxCode` | `string \| null \| undefined` | Optional | - |
| `accountingCode` | `string \| null \| undefined` | Optional | - |
| `itemCategory` | [`ItemCategory \| null \| undefined`](../../doc/models/item-category.md) | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `pricePoint` | [`WalletProductPricePointAttributes \| undefined`](../../doc/models/wallet-product-price-point-attributes.md) | Optional | Creates one price point for the Wallet Product in the same call. Ignored if `price_points` is also sent. |
| `pricePoints` | [`WalletProductPricePointAttributes[] \| undefined`](../../doc/models/wallet-product-price-point-attributes.md) | Optional | Creates several price points for the Wallet Product in the same call, winning over `price_point` if both are sent. The first price point created becomes the Wallet Product's default. The whole call is one transaction: if any price point in the array fails validation, nothing is created, including the Wallet Product itself. |

## Example

```ts
import { ItemCategory, WalletProduct } from '@maxio-com/advanced-billing-sdk';

const walletProduct: WalletProduct = {
  name: 'name4',
  unitName: 'unit_name6',
  handle: 'handle0',
  description: 'description4',
  taxable: false,
  taxCode: 'tax_code2',
  accountingCode: 'accounting_code0',
  itemCategory: ItemCategory.EnumBusinessSoftware,
};
```

