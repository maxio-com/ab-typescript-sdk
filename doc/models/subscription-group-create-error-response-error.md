
# Subscription Group Create Error Response Error

## Structure

`SubscriptionGroupCreateErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`SubscriptionGroupCreateErrorResponseErrors`](../../doc/models/containers/subscription-group-create-error-response-errors.md) | Required | This is a container for one-of cases. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionGroupCreateErrorResponseError) {
    console.log(error.result);
  }
}
```

