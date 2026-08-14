
# Update Subscription Component

## Structure

`UpdateSubscriptionComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `customPrice` | [`ComponentCustomPrice \| undefined`](../../doc/models/component-custom-price.md) | Optional | Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. |

## Example

```ts
import {
  IntervalUnit,
  PricingScheme,
  UpdateSubscriptionComponent,
} from '@maxio-com/advanced-billing-sdk';

const updateSubscriptionComponent: UpdateSubscriptionComponent = {
  componentId: 118,
  customPrice: {
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
    taxIncluded: false,
    pricingScheme: PricingScheme.Stairstep,
    interval: 66,
    intervalUnit: IntervalUnit.Day,
    listPricePointId: 174,
  },
};
```

