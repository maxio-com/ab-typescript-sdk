
# Activate Event Based Component

## Structure

`ActivateEventBasedComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pricePointId` | `number \| undefined` | Optional | The Chargify id of the price point |
| `billingSchedule` | [`BillingSchedule \| undefined`](../../doc/models/billing-schedule.md) | Optional | Billing schedule settings for component allocations or usages on multi-frequency subscriptions. Use this to start a component's billing period on a custom date instead of aligning with the product charge schedule. |
| `customPrice` | [`ComponentCustomPrice \| undefined`](../../doc/models/component-custom-price.md) | Optional | Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. |

## Example

```ts
import {
  ActivateEventBasedComponent,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const activateEventBasedComponent: ActivateEventBasedComponent = {
  pricePointId: 68,
  billingSchedule: {
    initialBillingAt: '2016-03-13T12:52:32.123Z',
  },
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

