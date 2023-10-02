
# List Sale Rep Item

## Structure

`ListSaleRepItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `fullName` | `string \| undefined` | Optional | - |
| `subscriptionsCount` | `number \| undefined` | Optional | - |
| `mrrData` | [`Record<string, SaleRepItemMrr> \| undefined`](../../doc/models/sale-rep-item-mrr.md) | Optional | - |
| `testMode` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "mrr_data": {
    "november_2019": {
      "mrr": "$0.00",
      "usage": "$0.00",
      "recurring": "$0.00"
    },
    "december_2019": {
      "mrr": "$0.00",
      "usage": "$0.00",
      "recurring": "$0.00"
    },
    "january_2020": {
      "mrr": "$400.00",
      "usage": "$0.00",
      "recurring": "$400.00"
    }
  },
  "id": 26,
  "full_name": "full_name8",
  "subscriptions_count": 154,
  "test_mode": false
}
```

