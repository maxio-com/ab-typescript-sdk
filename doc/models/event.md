
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `key` | [`EventKey`](../../doc/models/event-key.md) | Required | - |
| `message` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `subscriptionId` | `number \| null` | Required | - |
| `customerId` | `number \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `eventSpecificData` | [`EventEventSpecificData \| null`](../../doc/models/containers/event-event-specific-data.md) | Required | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "id": 40,
  "key": "invoice_issued",
  "message": "message8",
  "subscription_id": 150,
  "customer_id": 78,
  "created_at": "2016-03-13T12:52:32.123Z",
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
```

