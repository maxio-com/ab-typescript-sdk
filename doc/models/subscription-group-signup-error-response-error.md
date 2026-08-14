
# Subscription Group Signup Error Response Error

## Structure

`SubscriptionGroupSignupErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`SubscriptionGroupSignupError`](../../doc/models/subscription-group-signup-error.md) | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionGroupSignupErrorResponseError) {
    console.log(error.result);
  }
}
```

