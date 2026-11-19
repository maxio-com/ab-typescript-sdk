
# Event Based Billing Segment Write Error Response Error

Errors returned when creating or updating a single segment. Validation problems use the per-field error map; a write to a subscription's custom price point returns a `price_point` error.

## Structure

`EventBasedBillingSegmentWriteErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`EventBasedBillingSegmentSingleError \| undefined`](../../doc/models/event-based-billing-segment-single-error.md) | Optional | The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof EventBasedBillingSegmentWriteErrorResponseError) {
    console.log(error.result);
  }
}
```

