
# Nested Subscription Group

## Structure

`NestedSubscriptionGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | The UID for the group |
| `scheme` | `number \| undefined` | Optional | Whether the group is configured to rely on a primary subscription for billing. At this time, it will always be 1. |
| `primarySubscriptionId` | `number \| undefined` | Optional | The subscription ID of the primary within the group. Applicable to scheme 1. |
| `primary` | `boolean \| undefined` | Optional | A boolean indicating whether the subscription is the primary in the group. Applicable to scheme 1. |

## Example (as JSON)

```json
{
  "uid": "uid2",
  "scheme": 62,
  "primary_subscription_id": 10,
  "primary": false
}
```

