
# Subscription Groups Signup Json 422 Error

## Structure

`SubscriptionGroupsSignupJson422Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors7`](../../doc/models/errors-7.md) | Required | - |

## Example (as JSON)

```json
{
  "errors": {
    "customer": {
      "key1": "val1",
      "key2": "val2"
    },
    "payment_profile": {
      "key1": "val1",
      "key2": "val2"
    },
    "subscriptions": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

