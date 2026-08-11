
# Subscription Component Allocation Error

## Structure

`SubscriptionComponentAllocationError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`SubscriptionComponentAllocationErrorItem[] \| undefined`](../../doc/models/subscription-component-allocation-error-item.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SubscriptionComponentAllocationError) {
    console.log(error.result);
  }
}
```

