
# Subscription Response Error

## Structure

`SubscriptionResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`Subscription \| undefined`](../../doc/models/subscription.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionResponseError) {
    console.log(error.result);
  }
}
```

