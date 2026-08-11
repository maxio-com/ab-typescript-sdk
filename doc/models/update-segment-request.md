
# Update Segment Request

## Structure

`UpdateSegmentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segment` | [`UpdateSegment`](../../doc/models/update-segment.md) | Required | - |

## Example

```ts
import {
  PricingScheme,
  UpdateSegmentRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateSegmentRequest: UpdateSegmentRequest = {
  segment: {
    pricingScheme: PricingScheme.Stairstep,
    prices: [
      {
        unitPrice: 'String3',
        startingQuantity: 64,
        endingQuantity: 38,
      },
      {
        unitPrice: 'String3',
        startingQuantity: 64,
        endingQuantity: 38,
      },
      {
        unitPrice: 'String3',
        startingQuantity: 64,
        endingQuantity: 38,
      }
    ],
  },
};
```

