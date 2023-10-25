
# Event Response

## Structure

`EventResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`Event`](../../doc/models/event.md) | Required | - |

## Example (as JSON)

```json
{
  "event": {
    "id": 189.3,
    "key": "key0",
    "message": "message0",
    "subscription_id": 216.0,
    "customer_id": 61.68,
    "created_at": "created_at8",
    "event_specific_data": {
      "previous_unit_balance": null,
      "previous_overage_unit_balance": null,
      "new_unit_balance": null,
      "new_overage_unit_balance": null,
      "usage_quantity": null,
      "overage_usage_quantity": null,
      "component_id": null,
      "component_handle": null,
      "memo": null,
      "allocation_details": [
        null
      ],
      "previous_product_id": 126,
      "new_product_id": 12
    }
  }
}
```

