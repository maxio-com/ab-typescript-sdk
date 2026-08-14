
# Subscription Group Update Error Response Error

## Structure

`SubscriptionGroupUpdateErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`SubscriptionGroupUpdateError \| undefined`](../../doc/models/subscription-group-update-error.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionGroupUpdateErrorResponseError) {
    console.log(error.result);
  }
}
```

