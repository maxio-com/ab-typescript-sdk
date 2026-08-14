
# Bulk Update Segments Item

## Structure

`BulkUpdateSegmentsItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the segment you want to update. |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[]`](../../doc/models/create-or-update-segment-price.md) | Required | - |

## Example

```ts
import {
  BulkUpdateSegmentsItem,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const bulkUpdateSegmentsItem: BulkUpdateSegmentsItem = {
  id: 220,
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      unitPrice: 'String3',
      startingQuantity: 64,
      endingQuantity: 38,
    }
  ],
};
```

