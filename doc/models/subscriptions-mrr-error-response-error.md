
# Subscriptions Mrr Error Response Error

## Structure

`SubscriptionsMrrErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`AttributeError`](../../doc/models/attribute-error.md) | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionsMrrErrorResponseError) {
    console.log(error.result);
  }
}
```

