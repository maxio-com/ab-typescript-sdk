
# Segment

## Structure

`Segment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `eventBasedBillingMetricId` | `number \| undefined` | Optional | - |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `segmentProperty1Value` | [`SegmentSegmentProperty1Value \| undefined`](../../doc/models/containers/segment-segment-property-1-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty2Value` | [`SegmentSegmentProperty2Value \| undefined`](../../doc/models/containers/segment-segment-property-2-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty3Value` | [`SegmentSegmentProperty3Value \| undefined`](../../doc/models/containers/segment-segment-property-3-value.md) | Optional | This is a container for one-of cases. |
| `segmentProperty4Value` | [`SegmentSegmentProperty4Value \| undefined`](../../doc/models/containers/segment-segment-property-4-value.md) | Optional | This is a container for one-of cases. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `prices` | [`SegmentPrice[] \| undefined`](../../doc/models/segment-price.md) | Optional | **Constraints**: *Minimum Items*: `1` |
| `currencyPrices` | [`ComponentCurrencyPrice[] \| undefined`](../../doc/models/component-currency-price.md) | Optional | Prices of the segment in the site's non-primary currencies, one entry for each price and currency. This field is present only when the request includes `currency_prices=true`. If the price point uses the site exchange rate, the prices are calculated from the current rate and each `id` is `null`. |

## Example

```ts
import { PricingScheme, Segment } from '@maxio-com/advanced-billing-sdk';

const segment: Segment = {
  id: 118,
  componentId: 228,
  pricePointId: 4,
  eventBasedBillingMetricId: 56,
  pricingScheme: PricingScheme.Stairstep,
};
```

