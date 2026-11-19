
# Subscription Component Custom Price Segment

Custom rates for one segment of an event-based component, set on the subscription through `custom_price.segments`.

Identify the segment by the property values that occur in your events, in the same positions as the segmenting properties defined on the component's meter. Each segment in a request must have a unique combination of property values.

Property values are matched against your events as text. Send values for boolean segmenting properties as the strings `"true"` and `"false"`: JSON booleans are not supported here, and a segment whose only property value is `false` is rejected with a 422.

## Structure

`SubscriptionComponentCustomPriceSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segmentProperty1Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty1Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-1-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty2Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty2Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-2-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty3Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty3Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-3-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty4Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty4Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-4-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty5Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty5Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-5-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty6Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty6Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-6-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty7Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty7Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-7-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty8Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty8Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-8-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty9Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty9Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-9-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty10Value` | [`SubscriptionComponentCustomPriceSegmentSegmentProperty10Value \| undefined`](../../doc/models/containers/subscription-component-custom-price-segment-segment-property-10-value.md) | Optional | This is a container for one-of cases. |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`CreateOrUpdateSegmentPrice[]`](../../doc/models/create-or-update-segment-price.md) | Required | The rates for this segment. Use one price for a flat rate, or several price brackets for a tiered, volume or stairstep scheme.<br><br>**Constraints**: *Minimum Items*: `1` |

## Example

```ts
import {
  PricingScheme,
  SubscriptionComponentCustomPriceSegment,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionComponentCustomPriceSegment: SubscriptionComponentCustomPriceSegment = {
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      unitPrice: 'String3',
      startingQuantity: 64,
      endingQuantity: 38,
    }
  ],
  segmentProperty1Value: 'String3',
  segmentProperty2Value: 'String5',
  segmentProperty3Value: 'String3',
  segmentProperty4Value: 'String7',
  segmentProperty5Value: 'String7',
};
```

