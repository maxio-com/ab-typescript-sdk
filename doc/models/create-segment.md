
# Create Segment

## Structure

`CreateSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentProperty1Value` | [`CreateSegmentSegmentProperty1Value \| undefined`](../../doc/models/containers/create-segment-segment-property-1-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty2Value` | [`CreateSegmentSegmentProperty2Value \| undefined`](../../doc/models/containers/create-segment-segment-property-2-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty3Value` | [`CreateSegmentSegmentProperty3Value \| undefined`](../../doc/models/containers/create-segment-segment-property-3-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty4Value` | [`CreateSegmentSegmentProperty4Value \| undefined`](../../doc/models/containers/create-segment-segment-property-4-value.md) | Optional | This is a container for one-of cases. |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[] \| undefined`](../../doc/models/create-or-update-segment-price.md) | Optional | - |

## Example

```ts
import {
  CreateSegment,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const createSegment: CreateSegment = {
  pricingScheme: PricingScheme.Stairstep,
  segmentProperty1Value: 'String7',
  segmentProperty2Value: 'String9',
  segmentProperty3Value: 'String5',
  segmentProperty4Value: 'String1',
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
    }
  ],
};
```

