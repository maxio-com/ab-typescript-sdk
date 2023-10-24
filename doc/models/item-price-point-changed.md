
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

## Example (as JSON)

```json
{
  "item_id": 66,
  "item_type": "item_type6",
  "item_handle": "item_handle4",
  "item_name": "item_name8",
  "previous_price_point": {
    "id": 216,
    "handle": "handle6",
    "name": "name0"
  },
  "current_price_point": {
    "id": 218,
    "handle": "handle6",
    "name": "name0"
  }
}
```

