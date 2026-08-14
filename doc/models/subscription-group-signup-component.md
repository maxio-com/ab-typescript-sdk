
# Subscription Group Signup Component

## Structure

`SubscriptionGroupSignupComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | [`SubscriptionGroupSignupComponentComponentId \| undefined`](../../doc/models/containers/subscription-group-signup-component-component-id.md) | Optional | This is a container for one-of cases. |
| `allocatedQuantity` | [`SubscriptionGroupSignupComponentAllocatedQuantity \| undefined`](../../doc/models/containers/subscription-group-signup-component-allocated-quantity.md) | Optional | This is a container for one-of cases. |
| `unitBalance` | [`SubscriptionGroupSignupComponentUnitBalance \| undefined`](../../doc/models/containers/subscription-group-signup-component-unit-balance.md) | Optional | This is a container for one-of cases. |
| `pricePointId` | [`SubscriptionGroupSignupComponentPricePointId \| undefined`](../../doc/models/containers/subscription-group-signup-component-price-point-id.md) | Optional | This is a container for one-of cases. |
| `customPrice` | [`SubscriptionGroupComponentCustomPrice \| undefined`](../../doc/models/subscription-group-component-custom-price.md) | Optional | Used in place of `price_point_id` to define a custom price point unique to the subscription. You still need to provide `component_id`. |

## Example

```ts
import {
  IntervalUnit,
  PricingScheme,
  SubscriptionGroupSignupComponent,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionGroupSignupComponent: SubscriptionGroupSignupComponent = {
  componentId: 'String7',
  allocatedQuantity: 'String1',
  unitBalance: 'String5',
  pricePointId: 'String1',
  customPrice: {
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
  },
};
```

