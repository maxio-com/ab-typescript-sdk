
# Segment Price Point Error Details

Price-point validation error details for segment writes.

## Structure

`SegmentPricePointErrorDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePoint` | `string[]` | Required | - |

## Example

```ts
import {
  SegmentPricePointErrorDetails,
} from '@maxio-com/advanced-billing-sdk';

const segmentPricePointErrorDetails: SegmentPricePointErrorDetails = {
  pricePoint: [
    'price_point2'
  ],
};
```

