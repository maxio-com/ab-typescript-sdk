
# Wallet Products List Response

## Structure

`WalletProductsListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletProducts` | [`WalletProductListItem[]`](../../doc/models/wallet-product-list-item.md) | Required | - |
| `totalCount` | `number` | Required | Total number of Wallet Products matching the filters, across all pages. |
| `archivedCount` | `number` | Required | Not a simple count of archived products matching the filters. With `status=archived`, equals `total_count` (there's nothing else to report). With any other `status`, it's `0` whenever `total_count` is non-zero, and only when `total_count` is `0` does it become the number of archived Wallet Products matching the same `q` search term (ignoring `status`): an empty-state hint, not a running total. |

## Example

```ts
import {
  ItemCategory,
  PricingScheme,
  WalletProductsListResponse,
} from '@maxio-com/advanced-billing-sdk';

const walletProductsListResponse: WalletProductsListResponse = {
  walletProducts: [
    {
      id: 70,
      name: 'name4',
      handle: 'handle0',
      pricingScheme: PricingScheme.Stairstep,
      unitName: 'unit_name6',
      itemCategory: ItemCategory.EnumBusinessSoftware,
    }
  ],
  totalCount: 214,
  archivedCount: 238,
};
```

