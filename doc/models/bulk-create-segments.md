
# Bulk Create Segments

## Structure

`BulkCreateSegments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`CreateSegment[] \| undefined`](../../doc/models/create-segment.md) | Optional | **Constraints**: *Maximum Items*: `2000` |

## Example

```ts
import {
  BulkCreateSegments,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const bulkCreateSegments: BulkCreateSegments = {
  segments: [
    {
      pricingScheme: PricingScheme.Stairstep,
      segmentProperty1Value: 'String3',
      segmentProperty2Value: 'String5',
      segmentProperty3Value: 'String3',
      segmentProperty4Value: 'String7',
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
    }
  ],
};
```

