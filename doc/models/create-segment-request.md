
# Create Segment Request

## Structure

`CreateSegmentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segment` | [`CreateSegment`](../../doc/models/create-segment.md) | Required | - |

## Example

```ts
import {
  CreateSegmentRequest,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createSegmentRequest: CreateSegmentRequest = {
  segment: {
    pricingScheme: PricingScheme.Stairstep,
    segmentProperty1Value: 'String1',
    segmentProperty2Value: 'String3',
    segmentProperty3Value: 'String1',
    segmentProperty4Value: 'String5',
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

