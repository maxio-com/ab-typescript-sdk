
# Bulk Update Segments

## Structure

`BulkUpdateSegments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`BulkUpdateSegmentsItem[] \| undefined`](../../doc/models/bulk-update-segments-item.md) | Optional | **Constraints**: *Maximum Items*: `1000` |

## Example

```ts
import {
  BulkUpdateSegments,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const bulkUpdateSegments: BulkUpdateSegments = {
  segments: [
    {
      id: 50,
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
    {
      id: 50,
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
    }
  ],
};
```

