
# Segment Response

## Structure

`SegmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segment` | [`Segment \| undefined`](../../doc/models/segment.md) | Optional | - |

## Example

```ts
import {
  PricingScheme,
  SegmentResponse,
} from '@maxio-com/advanced-billing-sdk';

const segmentResponse: SegmentResponse = {
  segment: {
    id: 118,
    componentId: 228,
    pricePointId: 4,
    eventBasedBillingMetricId: 56,
    pricingScheme: PricingScheme.Stairstep,
  },
};
```

