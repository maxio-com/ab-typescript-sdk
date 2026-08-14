
# Update Segment

## Structure

`UpdateSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[] \| undefined`](../../doc/models/create-or-update-segment-price.md) | Optional | - |

## Example

```ts
import {
  PricingScheme,
  UpdateSegment,
} from '@maxio-com/advanced-billing-sdk';

const updateSegment: UpdateSegment = {
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
};
```

