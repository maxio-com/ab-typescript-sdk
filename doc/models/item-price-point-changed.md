
# Item Price Point Changed

## Structure

`ItemPricePointChanged`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemId` | `number` | Required | - |
| `itemType` | `string` | Required | - |
| `itemHandle` | `string` | Required | - |
| `itemName` | `string` | Required | - |
| `previousPricePoint` | [`ItemPricePointData`](../../doc/models/item-price-point-data.md) | Required | - |
| `currentPricePoint` | [`ItemPricePointData`](../../doc/models/item-price-point-data.md) | Required | - |

## Example

```ts
import { ItemPricePointChanged } from '@maxio-com/advanced-billing-sdk';

const itemPricePointChanged: ItemPricePointChanged = {
  itemId: 30,
  itemType: 'item_type6',
  itemHandle: 'item_handle4',
  itemName: 'item_name8',
  previousPricePoint: {
    id: 216,
    handle: 'handle6',
    name: 'name0',
  },
  currentPricePoint: {
    id: 218,
    handle: 'handle6',
    name: 'name0',
  },
};
```

