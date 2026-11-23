
# Segment Price Point Errors Error

Returned when a segment write targets a subscription's custom price point. Segments on a custom price point can only be set through `custom_price` on the subscription or component endpoints.

## Structure

`SegmentPricePointErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`SegmentPricePointErrorDetails`](../../doc/models/segment-price-point-error-details.md) | Required | Price-point validation error details for segment writes. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof SegmentPricePointErrorsError) {
    console.log(error.result);
  }
}
```

