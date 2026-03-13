
# Scheduled Renewal Item Request Body Component

## Structure

`ScheduledRenewalItemRequestBodyComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemType` | `string` | Required, Constant | Item type to add. Either Product or Component.<br><br>**Value**: `'Component'` |
| `itemId` | `number` | Required | Product or component identifier. |
| `pricePointId` | `number \| undefined` | Optional | Price point identifier. |
| `quantity` | `number \| undefined` | Optional | Optional quantity for the item. |
| `customPrice` | [`ScheduledRenewalComponentCustomPrice \| undefined`](../../doc/models/scheduled-renewal-component-custom-price.md) | Optional | Custom pricing for a component within a scheduled renewal. |

## Example (as JSON)

```json
{
  "item_type": "Component",
  "item_id": 108,
  "price_point_id": 122,
  "quantity": 212,
  "custom_price": {
    "tax_included": false,
    "pricing_scheme": "stairstep",
    "prices": [
      {
        "starting_quantity": 242,
        "ending_quantity": 40,
        "unit_price": 23.26
      },
      {
        "starting_quantity": 242,
        "ending_quantity": 40,
        "unit_price": 23.26
      }
    ]
  }
}
```

