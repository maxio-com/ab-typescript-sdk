
# Subscription Group Component Custom Price

Used in place of `price_point_id` to define a custom price point unique to the subscription. You still need to provide `component_id`.

## Structure

`SubscriptionGroupComponentCustomPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricingScheme` | [`PricingScheme \| undefined`](../../doc/models/pricing-scheme.md) | Optional | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | - |
| `overagePricing` | [`ComponentCustomPrice[] \| undefined`](../../doc/models/component-custom-price.md) | Optional | - |

## Example

```ts
import {
  IntervalUnit,
  PricingScheme,
  SubscriptionGroupComponentCustomPrice,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupComponentCustomPrice: SubscriptionGroupComponentCustomPrice = {
  pricingScheme: PricingScheme.Stairstep,
  prices: [
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    },
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    }
  ],
  overagePricing: [
    {
      prices: [
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        }
      ],
      taxIncluded: false,
      pricingScheme: PricingScheme.Stairstep,
      interval: 230,
      intervalUnit: IntervalUnit.Day,
      listPricePointId: 10,
    },
    {
      prices: [
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        }
      ],
      taxIncluded: false,
      pricingScheme: PricingScheme.Stairstep,
      interval: 230,
      intervalUnit: IntervalUnit.Day,
      listPricePointId: 10,
    },
    {
      prices: [
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        }
      ],
      taxIncluded: false,
      pricingScheme: PricingScheme.Stairstep,
      interval: 230,
      intervalUnit: IntervalUnit.Day,
      listPricePointId: 10,
    }
  ],
};
```

