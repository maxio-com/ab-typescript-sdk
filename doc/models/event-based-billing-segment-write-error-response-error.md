
# Event Based Billing Segment Write Error Response Error

Errors returned when creating or updating a single segment. Validation problems use the per-field error map; a write to a subscription's custom price point returns a `price_point` error.

## Structure

`EventBasedBillingSegmentWriteErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | `Record<string, unknown> \| undefined` | Optional | - |

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

