
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
    "created_at": "created_at8",
    "event_specific_data": {
      "previous_subscription_state": "previous_subscription_state4",
      "new_subscription_state": "new_subscription_state8"
    }
  }
}
```

