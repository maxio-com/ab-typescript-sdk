
# Event Based Billing Segment Error

## Structure

`EventBasedBillingSegmentError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`EventBasedBillingSegmentError`](../../doc/models/event-based-billing-segment-error.md) | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof EventBasedBillingSegmentError) {
    console.log(error.result);
  }
}
```

