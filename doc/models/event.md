
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `key` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `message` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `subscriptionId` | `number` | Required | - |
| `createdAt` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `eventSpecificData` | [`EventEventSpecificData \| null`](../../doc/models/containers/event-event-specific-data.md) | Required | This is a container for one-of cases. |

## Example (as JSON)

```json
{
  "id": 159.12,
  "key": "key2",
  "message": "message8",
  "subscription_id": 185.82,
  "created_at": "created_at0",
  "event_specific_data": {
    "previous_subscription_state": "previous_subscription_state4",
    "new_subscription_state": "new_subscription_state8"
  }
}
```

