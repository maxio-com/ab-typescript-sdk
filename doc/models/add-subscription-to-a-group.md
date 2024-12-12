
# Add Subscription to a Group

## Structure

`AddSubscriptionToAGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`GroupSettings \| undefined`](../../doc/models/group-settings.md) | Optional | - |

## Example (as JSON)

```json
{
  "group": {
    "target": {
      "type": "parent",
      "id": 236
    },
    "billing": {
      "accrue": false,
      "align_date": false,
      "prorate": false
    }
  }
}
```

